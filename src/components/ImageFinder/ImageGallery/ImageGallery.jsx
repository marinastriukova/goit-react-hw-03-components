import './ImageGallery.css';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import FetchPixabay from '../services/api';
import Modal from '../Modal/Modal';
import ButtonLoadMore from '../Button/Button';
import Swal from 'sweetalert2';
import Spinner from '../Loader/Loader'
import PropTypes from 'prop-types'

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
    static propTypes = {
        onNameChange: PropTypes.string,        
    }

    state = {
        images: [],
        page: 1,
        showModal: false,
        status: Status.IDLE,
        largeImage: null
    }

    componentDidUpdate(prevProps, prevState) {
        const prevImage = prevProps.onChangeName;
        const nextImage = this.props.onChangeName;

        if (prevImage !== nextImage) {
            this.setState({ status: Status.PENDING });
            setTimeout(() => {
                FetchPixabay(nextImage)
                    .then(data => {
                        if (data.hits.length === 0) {
                            Swal.fire({
                                title: "OMG!",
                                text: "No results found!",
                                icon: "error"
                            })
                            return
                        }
                        this.setState({ images: data.hits, status: Status.RESOLVED });
                        this.scrool();
                    })
                    .catch(error => this.setState({ status: Status.REJECTED }))
            }, 1500)

        }

        if (prevState.page !== this.state.page) {
            this.setState({ status: Status.PENDING });
            setTimeout(() => {
                FetchPixabay(nextImage, this.state.page)
                    .then(data => {
                        this.setState(prevState => ({
                            images: [...prevState.images, ...data.hits],
                            status: Status.RESOLVED
                        }));
                        this.scrool();
                    })
                    .catch(error => this.setState({ status: Status.REJECTED }))
            }, 1500)

        }
    }

    scrool = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }

    handleImageClick = largeImageURL => {
        this.setState({ largeImage: largeImageURL, showModal: true });
        document.body.style.overflow = 'hidden';
    }

    toggleModal = () => {
        this.setState({ showModal: false });
        document.body.style.overflow = '';
    }

    handleBackdropClick = e => {
        if (e.target.className === 'Overlay') {
            this.toggleModal();
        }
    }

    incrementPage = () => {
        this.setState({ page: this.state.page + 1 })
    }


    render() {
        const { images, largeImage, showModal, status } = this.state
        return (
            <div>
                <ul className="ImageGallery">
                    <ImageGalleryItem images={images} onClickZoomIn={this.handleImageClick}></ImageGalleryItem>

                    {showModal && <Modal onClose={this.toggleModal} onBackdropClick={this.handleBackdropClick} largeImage={largeImage}></Modal>}
                </ul>

                {(status === Status.PENDING) && <Spinner height={100} width={100} timeout={2000} />}

                {(images.length > 0 || status === Status.RESOLVED) && <ButtonLoadMore incrementPage={this.incrementPage} />}
            </div>
        )
    }
}
