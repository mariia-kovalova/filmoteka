import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { BtnsList, LibraryBtn } from 'components/Global.styled';

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
      <section>
        <Outlet />
      </section>
    </>
  );
};
