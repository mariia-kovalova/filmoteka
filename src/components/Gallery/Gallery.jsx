import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from 'redux/operations';
import { selectFilms } from 'redux/selectors';
import { usePagination } from 'hooks/usePagination';
import { toast } from 'react-toastify';
import { GalleryItem } from 'components/GalleryItem';
import { Loader } from 'components/Loader';
import { MuiPagination } from 'components/MuiPagination';
import { GalleryList } from './Gallery.styled';
import { useSearchParams } from 'react-router-dom';

const errorText = {
  noResults:
    'Search result not successful. Enter the correct movie name and try again.',
};

const errorInfo = text => {
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
};

export const Gallery = () => {
  let [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {
    data: { results: items = [], total_pages = 0, total_results = 0 },
    isLoading,
    error,
  } = useSelector(selectFilms);
  const paginationData = usePagination(total_pages);

  useEffect(() => {
    dispatch(getFilms({ query: searchParams.get('query') ?? '', page }));
  }, [dispatch, page, searchParams]);

  const handleChange = (e, nextPage) => {
    setPage(nextPage);
    paginationData.jump(nextPage);
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
      <MuiPagination count={total_pages} page={page} onChange={handleChange} />
      <Loader isLoading={isLoading} />
      {error && <div>Error</div>}
    </>
  );
};
