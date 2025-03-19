import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ title, posterPath, overview }) => {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "src/assets/noResultsExample.jpg";

  return (
    <Card className="movie-card bg-dark text-white border-primary">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview.substring(0, 100)}...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
