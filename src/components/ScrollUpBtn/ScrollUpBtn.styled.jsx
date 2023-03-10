import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';

const show = keyframes`
  from {
    opacity: 0;
    pointer-events: none;
  }

  to {
   opacity: 1;
    pointer-events: all;
  }
`;

export const ScrollBtn = styled.div`
  position: fixed;
  right: calc(8px + (24 - 8) * ((100vw - 320px) / (1280 - 320)));
  bottom: calc(8px + (24 - 8) * ((100vw - 320px) / (1280 - 320)));

  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(32px + (64 - 32) * ((100vw - 320px) / (1280 - 320)));
  height: calc(32px + (64 - 32) * ((100vw - 320px) / (1280 - 320)));

  background-color: rgb(225, 84, 100);
  color: var(--color-text-light);

  border-radius: 50%;
  transition: background-color 250ms linear;
  animation: ${show} 1s linear;

  &:hover {
    background-color: var(--color-card__text);
  }

  &.is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transform: scale(0.95);
  }
`;
