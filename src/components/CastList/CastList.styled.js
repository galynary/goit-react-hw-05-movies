import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 7 * 16px) / 8);
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
  margin-bottom: 16px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-weight: 700;
  padding: 0 10px;
  font-size: 12px;
`;

export const Character = styled.div`
  padding: 0 10px;
  font-size: 10px;
  p {
    font-weight: 700;
    font-size: 12px;
  }
`;
