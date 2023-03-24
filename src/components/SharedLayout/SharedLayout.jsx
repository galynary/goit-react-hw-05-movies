import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../services';
import { Container, Header, NavLink } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
