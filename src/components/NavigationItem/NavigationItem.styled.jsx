import styled from '@emotion/styled';

export const NavBarLink = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text-light);
  outline: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &--current::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--color-error);
  }

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;
