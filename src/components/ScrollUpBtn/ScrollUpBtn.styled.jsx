import styled from '@emotion/styled';

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
