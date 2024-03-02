import Modal from 'react-modal';
import { RxExit } from 'react-icons/rx';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, image, onCloseClick }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseClick}
        overlayClassName={css.backdrop}
        className={css.modal}
      >
        <div >
          <button className={css.closeButton} onClick={onCloseClick}>
            <RxExit />
          </button>
          {image && (
            <>
              <div className={css.imgContainer}>
                <img
                  src={image.urls.regular}
                  alt={image.description}
                  className={css.image}
                />
              </div>
              <p className={css.text}>Author: {image.user.username}</p>
              <p className={css.text}>Likes: {image.likes} </p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
