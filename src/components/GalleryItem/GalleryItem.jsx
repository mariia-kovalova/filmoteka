import { Button } from '@mui/material';
import { FilmModalInfo } from 'components/FilmModalInfo';
import { Modal } from 'components/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  converTittle,
  getFullYear,
  getGenresListById,
  getSrc,
} from 'utils/infoConverter';
import { CardLink, Poster, Text, Title } from './GalleryItem.styled';

export const GalleryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { id, poster_path, title, release_date, genre_ids } = item;
  const year = getFullYear(release_date);
  const genresList = getGenresListById(genre_ids);
  const convertedTitle = converTittle(title);
  const src = getSrc(poster_path);
  return (
    <>
      <CardLink to="/filmpage">
        <Poster src={src} alt={title} loading="lazy" />
        <Title>{convertedTitle}</Title>
        <Text>
          {genresList} | {year}
        </Text>
        <Button type="button" onClick={() => handleOpenModal()}>
          Click me
        </Button>
      </CardLink>

      {showModal && (
        <Modal onCloseModal={handleCloseModal}>
          <FilmModalInfo id={id} onCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
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
