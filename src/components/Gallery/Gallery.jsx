import { useEffect } from 'react';
import { GalleryItem } from 'components/GalleryItem';
import { useState } from 'react';
import { GalleryList } from './Gallery.styled';
import { getFilmsByKeyword, getTrendingFilms } from 'utils/film-service';

export const Gallery = () => {
  //  const [url, setUrl] = useState('');

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrends();
    if (query.trim() !== '') getFilms();

    async function getTrends() {
      try {
        setIsLoading(true);
        const { results: items, totalPages: total } = await getTrendingFilms(
          page
        );
        setItems(items);
        setTotal(total);
        // if (total === 0) notify(query);
      } catch (error) {
        setError(error);
        // errorInfo(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    async function getFilms() {
      try {
        setIsLoading(true);
        const { results: items, totalPages: total } = await getFilmsByKeyword({
          query,
          page,
        });
        setItems(items);
        setTotal(total);
        // if (total === 0) notify(query);
      } catch (error) {
        setError(error);
        // errorInfo(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [page, query]);

  return (
    <GalleryList>
      {items.map(item => (
        <li key={item.id} data-id={item.id}>
          <GalleryItem item={item} />
        </li>
      ))}
    </GalleryList>
  );
};
