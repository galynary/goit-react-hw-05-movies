import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'fetchAPI/services';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';

const TrendingMovies = () => {
  const [trendingFilms, setTrendingFilms] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setOnLoad(true);
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingFilms(data);
      } catch (error) {
        setError('The request was not correct. Please try again!');
      } finally {
        setOnLoad(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <main>
      {onLoad && <Loader />}
      {error && <div>{toast(error)}</div>}
      {trendingFilms && <MoviesList movies={trendingFilms} />}
    </main>
  );
};

export default TrendingMovies;
