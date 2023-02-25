import PropTypes from 'prop-types';
import {
  converTittle,
  getFullYear,
  getGenresListById,
  getSrc,
} from 'utils/infoConverter';
import { CardLink, Poster, Text, Title } from './GalleryItem.styled';

export const GalleryItem = ({ item }) => {
  const { poster_path, title, release_date, genre_ids } = item;
  const year = getFullYear(release_date);
  const genresList = getGenresListById(genre_ids);
  const convertedTitle = converTittle(title);
  const src = getSrc(poster_path);
  return (
    <CardLink to="/filmpage">
      <Poster src={src} alt={title} loading="lazy" />
      <Title>{convertedTitle}</Title>
      <Text>
        {genresList} | {year}
      </Text>
    </CardLink>
  );
};

GalleryItem.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

// Film page
