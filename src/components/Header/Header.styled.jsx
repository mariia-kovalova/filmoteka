import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: #252d31;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 49px;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    column-gap: 40px;
  }
`;
