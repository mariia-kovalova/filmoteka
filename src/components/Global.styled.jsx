import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const DarkSection = styled.section`
  background-color: #252d31;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const BtnsList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;

  @media screen and (min-width: 768px) {
    column-gap: 40px;
  }
`;

export const LibraryBtn = styled(NavLink)`
  padding: 14px 36px 12px 37px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text-light);
  background-color: transparent;
  border: 1px solid var(--color-text-light);
  border-radius: 5px;
  outline: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &.active {
    background-color: #ff6b02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 48px;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 178px);
`;
