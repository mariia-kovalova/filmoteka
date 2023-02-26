import { SearchForm } from 'components/SearchForm/SearchForm';
import { Gallery } from 'components/Gallery';
import {
  Container,
  DarkSection,
  LightSection,
  Main,
} from 'components/GlobalStyles.styled';

export const HomePage = () => (
  <Main>
    <DarkSection>
      <Container>
        <SearchForm />
      </Container>
    </DarkSection>
    <LightSection>
      <Container>
        <Gallery />
      </Container>
    </LightSection>
  </Main>
);
