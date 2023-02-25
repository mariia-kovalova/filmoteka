import { SearchForm } from 'components/SearchForm/SearchForm';
import { Gallery } from 'components/Gallery';
import {
  Container,
  DarkSection,
  LightSection,
  Main,
} from 'components/Global.styled';

export const HomePage = () => {
  return (
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
};
