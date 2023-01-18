import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ src, alt, onClose }) => {

  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleEscDown)
    return () => {
      window.removeEventListener('keydown', handleEscDown)
    }
  }, [onClose])

    const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <ModalWindow>
          <img src={src} alt={alt} />
        </ModalWindow>
      </Backdrop>,
      modalRoot
    )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

// ========================================================================
// export class oldModal extends Component {
//   static propTypes = {
//     onClose: PropTypes.func.isRequired,
//   }

  // handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // }

  // handleBackdropClick = e => {
  //   if (e.currentTarget === e.target) {
  //     this.props.onClose();
  //   }
  // }

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown)
//   }

//   render() {
//     const { src, alt } = this.props
//     return createPortal(
//       <Backdrop onClick={this.handleBackdropClick}>
//         <ModalWindow>
//           <img src={src} alt={alt} />
//         </ModalWindow>
//       </Backdrop>,
//       modalRoot
//     )
//   }
// }
 