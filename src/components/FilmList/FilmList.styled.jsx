import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
  :hover {
    scale: 1.05;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
  height: 604.5px;
`;

export const FilmTitle = styled.h2`
  margin-top: 10px;
  text-transform: uppercase;
  color: whitesmoke;
`;
