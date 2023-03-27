import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../services';
import { Container, Header, Link } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
