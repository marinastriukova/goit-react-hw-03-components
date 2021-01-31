import './Modal.css';
import { Component } from 'react';

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };


    render() {
        return (
            <div className="Overlay" onClick={this.props.onBackdropClick} >
                <div className="Modal">
                    <img className="ModalImage" src={this.props.largeImage} alt="" />
                </div>
            </div>
        )
    }
}

