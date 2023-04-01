import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
  padding: 20px;

  > p {
    text-align: center;
    line-height: 1.5em;
    font-size: 12px;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  padding: 0 10px;
  text-transform: capitalize;
  font-size: large;
`;
