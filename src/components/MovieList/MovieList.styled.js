import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 50px) / 5);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  > a {
    text-decoration: none;
  }
  img {
    height: 360px;
    border-radius: 6px;
    width: 100%;
    object-fit: cover;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.35);
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
  color: #272020;
  text-align: center;
`;
