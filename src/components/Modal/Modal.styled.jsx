import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  background-color: var(--color-bg-primary);
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  padding: 0;
  background-color: var(--color-text-light);

  &:hover .modal-close-icon,
  &:focus .modal-close-icon {
    width: 16px;
    height: 16px;
  }
`;
