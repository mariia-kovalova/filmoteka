import { useState, useEffect } from 'react';
import { getFilmsByKeyword, getTrendingFilms } from 'utils/film-service';
import { usePagination } from 'hooks/usePagination';
import { toast } from 'react-toastify';
import { GalleryItem } from 'components/GalleryItem';
import { Loader } from 'components/Loader';
import { MuiPagination } from 'components/MuiPagination';
import { GalleryList } from './Gallery.styled';

const errorText = {
  noResults:
    'Search result not successful. Enter the correct movie name and try again.',
};

export const Gallery = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const data = usePagination(totalPages);

  useEffect(() => {
    getFilms();

    async function getFilms() {
      try {
        setIsLoading(true);
        const { results, total_pages, total_results } =
          query.trim() === ''
            ? await getTrendingFilms(page)
            : await getFilmsByKeyword({
                query,
                page,
              });
        setItems(results);
        setTotalPages(total_pages);
        setTotalResults(total_results);
        console.log(total_pages);
        console.log(total_results);
        if (total_results === 0) errorInfo(errorText.noResults);
      } catch (error) {
        setError(error);
        errorInfo(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [page, query]);

  function errorInfo(text) {
    return toast.error(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }

  const handleChange = (e, nextPage) => {
    setPage(nextPage);
    data.jump(nextPage);
  };

  return (
    <>
      <GalleryList>
        {items.map(item => (
          <li key={item.id} data-id={item.id}>
            <GalleryItem item={item} />
          </li>
        ))}
      </GalleryList>
      {items.length > 0 && (
        <MuiPagination count={totalPages} page={page} onChange={handleChange} />
      )}
      <Loader isLoading={isLoading} />
      {error && <div>Error</div>}
    </>
  );
};
