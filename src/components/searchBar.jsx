import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup } from "react-bootstrap";


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
        <InputGroup.Text className="bg-warning border-warning">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Buscar película..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          backgroundColor: '#f9d3a1',
          borderColor: '#f5a623',
          padding: '5px',
          borderRadius: '4px',
        }}
      />
      </InputGroup>
      <Button variant="warning" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default SearchBar;
