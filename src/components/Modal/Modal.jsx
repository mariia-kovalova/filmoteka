import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBtn, ModalStyled, Overlay } from './Modal.styled';
import { GrClose } from 'react-icons/gr';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onCloseModal]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }
    onCloseModal();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalStyled>
        <ModalBtn type="button" onClick={() => onCloseModal()}>
          <GrClose />
        </ModalBtn>
        {children}
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func.isRequired,
};
