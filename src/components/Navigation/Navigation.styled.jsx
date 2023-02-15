import styled from '@emotion/styled';

export const NavBar = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    column-gap: 40px;
  }
`;
