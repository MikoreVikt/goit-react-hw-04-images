import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';

export const ImageGallery = ({images}) => {
    return (
        <Ul>
            {images.map(({ id, webformatURL, largeImageURL, tags, }) =>
                <ImageGalleryItem 
                    key={id} 
                    id={id} 
                    src={webformatURL}
                    alt={tags}
                    largeImageURL={largeImageURL}
                />
            )}
        </Ul>
    )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
