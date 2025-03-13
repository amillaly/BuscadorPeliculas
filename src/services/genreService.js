import axiosInstance from './apiConfig';

export const getGenres = async () => {
  const response = await axiosInstance.get('/genre/movie/list');
  return response.data.genres;
};
