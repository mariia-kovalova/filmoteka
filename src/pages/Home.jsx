import { Footer } from 'components/Footer';
import { Gallery } from 'components/Gallery';
import { Main } from 'components/Global.styled';
import { Header } from 'components/Header';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Home = () => {
  return (
    <>
      <Header>
        <SearchForm />
      </Header>
      <Main>
        <section>
          <Gallery contentType="trending" />
        </section>
      </Main>
      <Footer />
    </>
  );
};
