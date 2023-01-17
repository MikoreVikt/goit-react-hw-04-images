import { Component } from "react";
import PropTypes from 'prop-types';
import { Li, Img } from "./ImageGalleryItem.styled";
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        largeImageUrl: PropTypes.string,
    }
    
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }))
    }

    render() {
        const { showModal  } = this.state
        const { src, alt, largeImageURL  } = this.props
        
        return (
            <Li>
                <Img
                    onClick={this.toggleModal}
                    src={src}
                    alt={alt}
                />
                {showModal && (
                    <Modal onClose={this.toggleModal} src={largeImageURL} alt={alt} />
                )}
            </Li>
        )
    }
}
