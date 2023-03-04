import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Input, SearchBtn, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleQueryChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSearchFormSubmit = e => {
    e.preventDefault();
    if (query !== '') {
      setSearchParams({ query });
    }
  };

  return (
    <>
      <SearchFormStyled onSubmit={handleSearchFormSubmit}>
        <Input
          type="text"
          placeholder="Movie search"
          name="query"
          value={query}
          onChange={handleQueryChange}
        />
        <SearchBtn type="submit" aria-label="search">
          <IconContext.Provider value={{ size: '1em' }}>
            <FaSearch />
          </IconContext.Provider>
        </SearchBtn>
      </SearchFormStyled>
    </>
  );
};
