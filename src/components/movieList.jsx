import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./movieCard"
import NoResults from "./noResults";

const MovieList = ({ movies }) => {
  return (
    <div className="my-4">
      {movies.length > 0 ? (
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} md={4} className="mb-4">
              <MovieCard
                title={movie.title}
                posterPath={movie.poster_path}
                overview={movie.overview}
                movieId={movie.id}//Agregar lista de actores                
              />
            </Col>
          ))}
        </Row>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default MovieList;
