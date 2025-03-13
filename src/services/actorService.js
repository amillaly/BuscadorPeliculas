import axiosInstance from './apiConfig';

export const searchActors = async (query) => {
  const response = await axiosInstance.get('/search/person', {
    params: { query },
  });
  return response.data.results;
};
