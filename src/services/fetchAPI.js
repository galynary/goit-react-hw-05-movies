import axios from 'axios';
const API_KEY = 'bdbc07f7fb6918c946cf9e79b19ef259';
const BASE_URL = 'https://api.themoviedb.org/3/';
const Api = async (url = ``) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ApiTrending = () => {
  return Api(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const ApiByQuery = searchQuery => {
  return Api(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
};

export async function CompleteInformationFilm(id) {
  return Api(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

export async function CastFilm(id) {
  return Api(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}

export async function ReviewsFilm(id) {
  return Api(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
}
