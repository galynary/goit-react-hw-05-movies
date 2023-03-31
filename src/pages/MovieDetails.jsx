import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet} from 'react-router-dom';
import { fetchMovieDetails } from 'api/fetchAPI';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { BackButton } from 'components/MovieInfo/MovieInfo.styled';
import { Loader } from "components/Loader/Loader";
import { toast } from 'react-toastify';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState(''); 

  const location = useLocation();
  const backLink = location.state?.from ?? '/';


  useEffect(() => {
    setOnLoad(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('Something wrong');
      } finally { 
        setOnLoad(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

    return (
        <main>
        {onLoad && <Loader />}
        {error && <div>{toast(error)}</div>}
          {movie && (
            <>
            <BackButton to={backLink}>Go back</BackButton>
            <MovieInfo movie={movie} backPath={backLink} />
            </>
          )}
    
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      );

}
export default MovieDetails;
