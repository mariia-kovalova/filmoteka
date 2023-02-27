import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmById } from 'redux/operations';
import { selectFilm } from 'redux/selectors';
import { getGenresListFromArr, getSrc } from 'utils/infoConverter';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import {
  About,
  AboutDescription,
  AboutTitle,
  BtnsList,
  FilmInfo,
  FilmTitle,
  InfoLabel,
  InfoValue,
  Table,
  Thumb,
  Vote,
  VoteCount,
  Wrap,
} from './FilmModalInfo.styled';

export const FilmModalInfo = ({ id }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(selectFilm);
  console.log(data);

  const {
    poster_path = '',
    title = 'Title',
    original_title = 'Original title',
    vote_average = 6.548,
    vote_count = 42,
    popularity = 93.983,
    overview = 'Overview',
    genres = ['Action', 'Comedy', 'Thriller'],
    video = false,
  } = data;

  useEffect(() => {
    dispatch(getFilmById(id));
  }, [dispatch, id]);

  const src = getSrc(poster_path);
  const genresNames = getGenresListFromArr(genres);

  return (
    <>
      <Wrap>
        <Loader isLoading={isLoading} />
        {error && <div>Error</div>}
        {!isLoading && (
          <>
            <Thumb>
              <img src={src} alt={title} />
            </Thumb>
            <FilmInfo>
              <FilmTitle>{title}</FilmTitle>
              <Table>
                <tbody>
                  <tr>
                    <InfoLabel>Vote / Votes</InfoLabel>
                    <InfoValue>
                      <Vote>{vote_average}</Vote> /
                      <VoteCount>{vote_count}</VoteCount>
                    </InfoValue>
                  </tr>
                  <tr>
                    <InfoLabel>Popularity</InfoLabel>
                    <InfoValue>{popularity}</InfoValue>
                  </tr>
                  <tr>
                    <InfoLabel>Original Title</InfoLabel>
                    <InfoValue>{original_title}</InfoValue>
                  </tr>
                  <tr>
                    <InfoLabel>Genre</InfoLabel>
                    <InfoValue>{genresNames}</InfoValue>
                  </tr>
                </tbody>
              </Table>
              <About>
                <AboutTitle>ABOUT</AboutTitle>
                <AboutDescription>{overview}</AboutDescription>
              </About>
              <BtnsList>
                <Button type="button">ADD TO WATCHED</Button>
                <Button type="button">ADD TO QUEUE</Button>
              </BtnsList>
            </FilmInfo>
          </>
        )}
      </Wrap>
    </>
  );
};

FilmModalInfo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
