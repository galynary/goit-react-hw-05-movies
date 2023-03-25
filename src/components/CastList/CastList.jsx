//import defaultImage from '../../images/no-poster.jpg';
import PropTypes from 'prop-types';
import { POSTER_URL } from 'services';
import { Character, Name, Image, List, Item } from './CastList.styled';
export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ cast_id, profile_path, name, character }) => {
        return (
          <Item key={cast_id}>
            <Image
              src={profile_path ? `${POSTER_URL}${profile_path}` : 'noPicture'}
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
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
