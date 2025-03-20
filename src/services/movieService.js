import axiosInstance from './apiConfig';

export const searchMovies = async (query) => {
  const response = await axiosInstance.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
};


//Agregar funcion para el apartado de reparto de los actores  

export const getMovieCredits = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`);
    return response.data;    
  } catch (error) {
    console.error('Error al obtener créditos:', error);
    throw error;
  }
};

//Agregar funcion para el apartado de reparto de los actores