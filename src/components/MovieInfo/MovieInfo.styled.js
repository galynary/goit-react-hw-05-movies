import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media only screen and (min-width: 1200px) {
    gap: 50px;
    flex-direction: row;
  }
  > img {
    height: 200px;
    border-radius: 6px;

    @media only screen and (min-width: 1200px) {
      height: 500px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 1200px) {
    max-width: 50%;
  }
`;

export const BackButton = styled(NavLink)`
  align-items: center;

  color: #272426;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 15px;
  border: 2px solid #cf2476;
  margin-bottom: 30px;
  display: block;
  width: 100px;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.35);
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: #f0c4d9;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 15px;
  border: 2px solid #cf2476;
  text-decoration: none;
  color: #272020;
  font-weight: 500;
  max-width: 150px;
  text-align: center;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.35);
  margin-bottom: 7px;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: #f0c4d9;
  }
`;

// @media only screen and (min-width: 320px) {
//     flex-basis: 100%;
//   }

//   @media only screen and (min-width: 760px) {
//     flex-basis: 40%;
//   }

//   @media only screen and (min-width: 1200px) {
//     flex-basis: calc((100% - 50px) / 5);
//   }
