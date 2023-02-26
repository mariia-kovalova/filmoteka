import { Outlet } from 'react-router-dom';
import {
  BtnsList,
  Container,
  DarkSection,
  LibraryBtn,
  LightSection,
  Main,
} from 'components/GlobalStyles.styled';

export const LibraryPage = () => (
  <Main>
    <DarkSection>
      <Container>
        <BtnsList>
          <li>
            <LibraryBtn to="watched">Watched</LibraryBtn>
          </li>
          <li>
            <LibraryBtn to="queue">Queue</LibraryBtn>
          </li>
        </BtnsList>
      </Container>
    </DarkSection>
    <LightSection>
      <Container>
        <Outlet />
      </Container>
    </LightSection>
  </Main>
);
