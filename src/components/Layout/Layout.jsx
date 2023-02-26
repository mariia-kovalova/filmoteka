import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ScrollUpBtn } from 'components/ScrollUpBtn';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <ScrollUpBtn />
    <ToastContainer />
  </>
);
