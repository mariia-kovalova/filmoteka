import { Footer } from 'components/Footer';
import { Main } from 'components/Global.styled';
import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>

    <Footer />
  </>
);
