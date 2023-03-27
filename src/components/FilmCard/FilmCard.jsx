import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { POSTER_URL } from 'services';
import { Container, Content, FilmTitle, Img } from './FilmCard.styled';
const FilmCard = ({ film }) => {
  const location = useLocation();
  const { poster_path, title, vote_average, overview, genres } = film;
  const genresName = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <Container>
        <Img
          src={poster_path ? `${POSTER_URL}${poster_path}` : 'noPicture'}
          alt={title}
        />
        <div>
          <FilmTitle>{title}</FilmTitle>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresName}</p>
        </div>

        <Content>
          <h2>Additional information</h2>
          <ul>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </ul>

          <Suspense fallback={<div>Loading page</div>}>
            <Outlet />
          </Suspense>
        </Content>
      </Container>
    </>
  );
};

export default FilmCard;

FilmCard.prototype = {
  film: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.number,
    })
  ).isRequired,
};
