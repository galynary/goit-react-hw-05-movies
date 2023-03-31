import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = 'e7b77a04616bbe4184f610c6f41bfdf9';
const BASE_URL = 'https://api.themoviedb.org/3';

const showToast = message => {
  if (!toast.isActive('notification')) {
    toast(message, { toastId: 'notification' });
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    showToast('Something went wrong');
  }
};

export const fetchSearchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (response.data.results.length === 0) {
      showToast('Oops...There are no such movies!');
    }
    return response.data.results;
  } catch (error) {
    console.log(error);
    showToast('Something went wrong');
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    showToast('Something went wrong');
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (response.data.cast.length === 0) {
      showToast('Oops...There are no casts');
    }
    return response.data.cast;
  } catch (error) {
    console.log(error);
    showToast('Something went wrong');
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (response.data.results.length === 0) {
      showToast('Oops...There are no reviews');
    }
    return response.data.results;
  } catch (error) {
    console.log(error);
    showToast('Something went wrong');
  }
};
