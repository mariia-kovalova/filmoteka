import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { BtnsList, LibraryBtn, Main } from 'components/Global.styled';
import { Footer } from 'components/Footer';

export const Library = () => {
  return (
    <>
      <Header>
        <BtnsList>
          <li>
            <LibraryBtn to="watched">Watched</LibraryBtn>
          </li>
          <li>
            <LibraryBtn to="queue">Queue</LibraryBtn>
          </li>
        </BtnsList>
      </Header>
      <Main>
        <section>
          <Outlet />
        </section>
      </Main>
      <Footer />
    </>
  );
};
