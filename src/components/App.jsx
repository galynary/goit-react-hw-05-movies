import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Page404 } from 'pages/Page404';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';


const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};


