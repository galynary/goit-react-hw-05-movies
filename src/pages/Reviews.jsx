import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'fetchAPI/services';
import { ReviewsList } from 'components/ReviewList/ReviewList';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { Id } = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setOnLoad(true);
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(Id);
        setMovieReviews(data);
      } catch (error) {
        setError('The request was not correct. Please try again!');
      } finally {
        setOnLoad(false);
      }
    };
    getReviews();
  }, [Id]);

  return (
    <>
      {movieReviews && <ReviewsList reviews={movieReviews} />}
      {onLoad && <Loader />}
      {error && <div>{toast(error)}</div>}
    </>
  );
};
export default Reviews;
