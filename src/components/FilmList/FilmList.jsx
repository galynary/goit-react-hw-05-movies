import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { POSTER_URL } from 'services';
import { Container, List, Item, Img, FilmTitle } from './FilmList.styled';
const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <Container>
      <List>
        {films.map(({ id, poster_path, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={poster_path ? `${POSTER_URL}${poster_path}` : 'noPicture'}
                alt={title}
              />
              <FilmTitle>{title}</FilmTitle>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default FilmList;
FilmList.prototype = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
