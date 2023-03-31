import { Character, Name, Image, List, Item } from './CastList.styled';
import defaultPicture from '../../images/no-image.jpg';
import PropTypes from 'prop-types';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ profile_path, cast_id, name, character }) => {
        return (
          <Item key={cast_id}>
            <Image
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : defaultPicture
              }
              alt={name}
            />
            <Name>{name}</Name>
            <Character>
              Character: <p>{character}</p>
            </Character>
          </Item>
        );
      })}
    </List>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
