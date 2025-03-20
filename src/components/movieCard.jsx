import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getMovieCredits } from "../services/movieService"; //Agregar lista de actores

const MovieCard = ({ title, posterPath, overview, movieId }) => {
  const [cast, setCast] = useState([]);

  
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "src/assets/noResultsExample.jpg";

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        if (movieId) {
          const credits = await getMovieCredits(movieId);
          //Agregar cuantos actores se muestran
          setCast(credits.cast.slice(0, 5));
        }
      } catch (error) {
        console.error("Error al obtener el reparto:", error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <Card className="movie-card bg-dark text-white border-primary">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview.substring(0, 100)}...</Card.Text>

        {/* Mostrar reparto si hay datos */}
        {cast.length > 0 && (
          <>
            <Card.Subtitle className="mt-3">Reparto principal:</Card.Subtitle>
            <ul>
              {cast.map((actor) => (
                <li key={actor.cast_id}>
                  {actor.name} como <em>{actor.character}</em>
                </li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
