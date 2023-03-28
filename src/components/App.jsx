import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';
import NotFound from 'pages/NotFound';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('//pages/Movies'));
const MovieDetails = lazy(() => import('//pages/MovieDetails'));
const Cast = lazy(() => import('//pages/Cast'));
const Reviews = lazy(() => import('//pages/Reviews'));
export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
