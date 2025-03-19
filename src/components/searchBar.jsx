import React, { useState } from "react";
import { Form, FormControl, Button,InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <Form className="d-flex my-3" onSubmit={handleSearch}>
      <InputGroup className="me-2">
        <InputGroup.Text>
          <i className="bi bi-search"></i> 
        </InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Buscar película..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </InputGroup>
      <Button variant="primary" type="submit">
       Buscar
      </Button>
    </Form>
  );
};

export default SearchBar;
