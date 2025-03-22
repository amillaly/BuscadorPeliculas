import React, { useState } from "react";
import { Form, FormControl, Button, InputGroup, Alert } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const formattedQuery = query.trim().replace(/\s+/g, " ");

    if (formattedQuery === "" || !/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/.test(formattedQuery)) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
    onSearch(formattedQuery);
  };

  const handleKeyUp = () => {
    const formattedQuery = query.trim().replace(/\s+/g, " ");

    if (formattedQuery === "" || !/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/.test(formattedQuery)) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
    onSearch(formattedQuery);
  };

  return (
    <>
      {showAlert && (
        <Alert
          variant="danger"
          onClose={() => setShowAlert(false)}
          dismissible
          style={{ backgroundColor: "#ff4c4c", color: "#fff", border: "1px solid #ff0000" }} 
        >
          <Alert.Heading style={{ fontSize: "1.25rem", fontWeight: "bold" }}>AL PARECER HUBO UN ERROR!</Alert.Heading>
          <p>
            Por favor, ingresa un término válido. Asegúrate de no incluir espacios innecesarios y utiliza solo letras y números.
          </p>
        </Alert>
      )}

      <Form className="d-flex my-3" onSubmit={handleSearch}>
        <InputGroup className="me-2">
          <InputGroup.Text className="bg-warning border-warning">
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Buscar película, actor o género..."
            className="me-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyUp}
            style={{
              backgroundColor: "#f9d3a1",
              borderColor: "#f5a623",
              padding: "5px",
              borderRadius: "4px",
            }}
          />
        </InputGroup>
        <Button variant="warning" type="submit">
          Buscar
        </Button>
      </Form>
    </>
  );
};

export default SearchBar;
