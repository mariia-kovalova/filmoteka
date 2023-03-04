import styled from '@emotion/styled';

export const Button = styled.button`
  width: 110px;
  height: 44px;

  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    flex-basis: 125px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: 136px;
  }

  &:hover,
  &:focus,
  &.active {
    background-color: #ff6b02;
    border: 1px solid transparent;
  }
`;
