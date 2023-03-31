import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 50px) / 5);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    transform: scale(0.9);
  }
  > a {
    text-decoration: none; 
  }
  img {
    height: 365px;
    object-fit: cover;
  }

@media only screen and (min-width: 320px) {
  flex-basis: 100%;
}

@media only screen and (min-width: 760px) {
  flex-basis: 40%;
}

@media only screen and (min-width: 1200px) {
  flex-basis: calc((100% - 50px) / 5);
}
`;

export const MovieName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: white; 
  text-align: center;
`;