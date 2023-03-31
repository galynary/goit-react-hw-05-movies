import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Loader } from "components/Loader/Loader";


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