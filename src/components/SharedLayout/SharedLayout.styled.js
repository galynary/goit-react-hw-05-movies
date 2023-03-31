import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 100px;
`;

export const Header = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: #272727;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  color: white; 
  text-decoration: none;
  text-transform: capitalize;
  border-bottom: 4px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    border-color: #ec9706;
    border-radius: 2px;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ec9706;
  }
`;