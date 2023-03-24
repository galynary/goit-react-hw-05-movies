import { Header, NavLink } from './NavLinks.styled';
export const NavLinks = () => {
  return (
    <>
      <Header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Header>
    </>
  );
};
