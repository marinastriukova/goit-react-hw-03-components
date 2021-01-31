import './ImageGalleryItem.css';
import PropTypes, { object } from 'prop-types';

function ImageGalleryItem({ images, onClickZoomIn }) {
    
    return (
        <>
            {images.map(image => {
                const { id, webformatURL, largeImageURL, tag } = image
                return (
                    <li key={id} className="ImageGalleryItem">
                        <img src={webformatURL} alt={tag} onClick={()=>onClickZoomIn(largeImageURL)} className="ImageGalleryItem-image" />
                    </li>
                )
            })}
        </>
    )
}

ImageGalleryItem.propTypes ={
    images: PropTypes.arrayOf(object).isRequired,
    onClickZoomIn: PropTypes.func
}

export default ImageGalleryItem