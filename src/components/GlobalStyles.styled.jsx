import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { modernNormalizeCss } from 'emotion-modern-normalize';

export const GlobalStyles = css`
  ${modernNormalizeCss}
  :root {
    --font-primary: 'Roboto', sans-serif;
    --color-bg-primary: #ffffff;
    --color-text-light: #ffffff;
    --color-text-dark: #000000;
    --color-text-secondary: #8c8c8c;
    --color-text-footer: #545454;
    --color-card__text: #ff6b08;
    --color-error: #ff001b;
    --color-accent: #ff6b01;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--font-primary);
    background-color: var(--color-bg-primary);
    color: var(--color-text-light);
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
  }

  textarea {
    resize: none;
  }
`;

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

export const LightSection = styled.section`
  padding-top: 40px;
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
