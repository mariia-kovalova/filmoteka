import { Outlet } from 'react-router-dom';
import {
  BtnsList,
  DarkSection,
  LibraryBtn,
  Main,
} from 'components/Global.styled';

export const LibraryPage = () => {
  return (
    <Main>
      <DarkSection>
        <BtnsList>
          <li>
            <LibraryBtn to="watched">Watched</LibraryBtn>
          </li>
          <li>
            <LibraryBtn to="queue">Queue</LibraryBtn>
          </li>
        </BtnsList>
      </DarkSection>
      <section>
        <Outlet />
      </section>
    </Main>
  );
};
