import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/Form/Form';
import { fetchSearchMovies } from 'api/fetchAPI';
import { Loader } from "components/Loader/Loader";
import { toast } from 'react-toastify';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) return;
    setOnLoad(true);
    const searchMovies = async () => {
      try {
        const data = await fetchSearchMovies(searchValue);
        setMovies(data);
      } catch (error) {
        setError('The request was incorrect! Try again.');
      } finally { 
        setOnLoad(false);
      }
    };
    searchMovies();

  }, [searchValue]);

  const onInputSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <SearchForm onSubmit={onInputSearch} />
      {onLoad && <Loader />}
      {error && <div>{toast(error)}</div>}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
export default Movies;