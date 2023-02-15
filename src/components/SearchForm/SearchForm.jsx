import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Input, SearchBtn, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  return (
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
  );
};

//react from with hooks
//search icon
