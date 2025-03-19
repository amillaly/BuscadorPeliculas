import React from "react";
import { Image } from "react-bootstrap";
import noResultsImg from "../assets/cine.png";

const NoResults = () => {
  return (
    <div className="text-center my-4">
      <Image src={noResultsImg} alt="No hay resultados" fluid width={300} />
      <h5 className="mt-3 text-muted">No se han encontrado resultados :( </h5>
    </div>
  );
};

export default NoResults;
