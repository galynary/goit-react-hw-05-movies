import styled from 'styled-components';

export const List = styled.ul`
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 7 * 16px) / 8);
`;

export const Image = styled.img`
  width: 140px;
  height: 170px;
  margin-bottom: 16px;
  object-fit: cover;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.35);
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
