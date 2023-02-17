import { Gallery } from 'components/Gallery';
import { DarkSection } from 'components/Global.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <DarkSection>
        <SearchForm />
      </DarkSection>
      <section>
        <Outlet />
      </section>
    </>
  );
};
