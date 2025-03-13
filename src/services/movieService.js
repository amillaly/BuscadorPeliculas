import axiosInstance from './apiConfig';

export const searchMovies = async (query) => {
  const response = await axiosInstance.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
};
