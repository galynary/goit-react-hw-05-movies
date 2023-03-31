import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'api/fetchAPI';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { Loader } from "components/Loader/Loader";
import { toast } from 'react-toastify';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setOnLoad(true);
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        setError('Something wrong');
      } finally { 
        setOnLoad(false);
      }
    };
    getReviews();

  }, [movieId]);

  return <>
    {movieReviews && <ReviewsList reviews={movieReviews} />}
    {onLoad && <Loader />}
    {error && <div>{toast(error)}</div>}
  </>;
};
export default Reviews;
