import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  color: var(--color-text-dark);

  width: 280px;
  min-height: 400px;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 68px;

    width: 704px;

    padding: 40px 36px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 16px;

    padding: 40px 12px;
    width: 806px;
  }
`;

export const Thumb = styled.div`
  overflow: hidden;

  height: 357px;
  width: 240px;
  margin-bottom: 20px;

  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 374px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    height: 478px;
    width: 375px;
  }
`;

export const FilmInfo = styled.div`
  @media screen and (min-width: 768px) {
    width: 264px;
  }

  @media screen and (min-width: 1280px) {
    width: 391px;
  }
`;

export const FilmTitle = styled.h2`
  font-size: 20px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
`;

export const Table = styled.table`
  margin: 0 0 12px 0;
  border-spacing: 0 8px;

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1280px) {
    width: 391px;
  }
`;

export const InfoLabel = styled.td`
  vertical-align: top;
  min-width: 108px;
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: 1280px) {
    min-width: 152px;
  }
`;

export const InfoValue = styled.td`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
  color: var(--color-text-dark);
`;

export const About = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 264px;
  }

  @media screen and (min-width: 1280px) {
    width: 391px;
  }
`;

export const AboutTitle = styled.div`
  font-size: 12px;
  line-height: 1.33;
`;

export const AboutDescription = styled.p`
  font-size: 12px;
  line-height: 1.67;
`;
export const Vote = styled.span`
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  width: 36px;
  height: 16px;
  background-color: var(--color-accent);
  color: var(--color-text-light);
  margin-right: 4px;
`;

export const VoteCount = styled.span`
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  width: 36px;
  height: 16px;
  background-color: #f7f7f7;
  margin-left: 4px;
`;

export const BtnsList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    justify-content: start;
  }
`;

// export const CardLink = styled(Link)``;
