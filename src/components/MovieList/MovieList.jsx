import { CardWrapper, Container, MovieName } from './MovieList.styled';
import { Link, useLocation } from 'react-router-dom';
import defaultPicture from '../../images/no-image.jpg';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ poster_path, title, id }) => {
        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultPicture
                }
                alt={title}
              />
              <MovieName>{title}</MovieName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
