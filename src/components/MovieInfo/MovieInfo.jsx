import React from 'react';
import { Container, Content, Link } from './MovieInfo.styled';
import defaultPicture from '../../images/no-image.jpg';
import PropTypes from 'prop-types';

const MovieInfo = ({ movie, backPath }) => {
  const { poster_path, title, vote_average, genres, overview } = movie;

  return (
    <Container>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultPicture
        }
        alt={title}
      />
      <Content>
        <h1>{title}</h1>
        <p>Rating: {vote_average.toFixed(1)}</p>
        <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
        <p>{overview}</p>
        <Link to="cast" state={{ from: backPath }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: backPath }}>
          Reviews
        </Link>
      </Content>
    </Container>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    overview: PropTypes.string,
  }).isRequired,
  backPath: PropTypes.object.isRequired,
};

export default MovieInfo;
