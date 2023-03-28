import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'fetchAPI/services';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Cast = () => {
  const { Id } = useParams();
  const [movieCast, setMovieCast] = useState();
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setOnLoad(true);
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(Id);
        setMovieCast(data);
      } catch (error) {
        setError('The request was not correct. Please try again!');
      } finally {
        setOnLoad(false);
      }
    };
    getMovieCast();
  }, [Id]);

  return (
    <>
      {movieCast && <CastList cast={movieCast} />}
      {onLoad && <Loader />}
      {error && <div>{toast(error)}</div>}
    </>
  );
};

export default Cast;
