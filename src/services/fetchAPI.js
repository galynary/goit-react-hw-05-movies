import axios from 'axios';
const API_KEY = 'e7b77a04616bbe4184f610c6f41bfdf9';
const BASE_URL = 'https://api.themoviedb.org/3/';
const Api = async (url = ``) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovies = () => {
  return Api(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const fetchSearchMovies = searchQuery => {
  return Api(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
};

export async function fetchMovieDetails(id) {
  return Api(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

export async function fetchMovieCredits(id) {
  return Api(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}

export async function fetchMovieReviews(id) {
  return Api(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
}
