import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

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
      <FormControl
        type="text"
        placeholder="Buscar película..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default SearchBar;
