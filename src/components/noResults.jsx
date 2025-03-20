import React from "react";
import { Image } from "react-bootstrap";
import noResultsImg from "../assets/loa.gif";

const NoResults = () => {
  const catStyle = {
    width: '300px',
    animation: 'bounce 1.5s infinite', 
  };

  const keyframesStyle = `
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  `;

  return (
    <div className="text-center my-4">
      <style>{keyframesStyle}</style>
      <br></br>
      <br></br>
      <br></br>
      <Image src={noResultsImg} alt="No hay resultados" fluid width={400} style={catStyle} />
      <h5 className="mt-3 text-muted">Ups....No se han encontrado resultados </h5>
    </div>
  );
};

export default NoResults;
