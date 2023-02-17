import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Input, SearchBtn, SearchFormStyled } from './SearchForm.styled';
import { Container } from 'components/Global.styled';

export const SearchForm = () => {
  return (
    <Container>
      <SearchFormStyled>
        <Input
          type="text"
          placeholder="Movie search"
          name="query"
          //   value={}
        />
        <SearchBtn type="submit" aria-label="search">
          <IconContext.Provider value={{ size: '1em' }}>
            <FaSearch />
          </IconContext.Provider>
        </SearchBtn>
      </SearchFormStyled>
    </Container>
  );
};

//react form with hooks
