// SearchBar.js

import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    navigate(`/search-results/${query}`);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      width="300px"
      margin="auto"
      marginTop="20px"
      display="flex"
      alignItems="center"
    >
      <Input
        type="text"
        placeholder="Search foods..."
        value={query}
        onChange={handleChange}
        sx={{ '::placeholder': { color: 'white' } }} // Custom CSS to set placeholder text color
        placeholderTextColor="white"
      />
      <Button type="submit" colorScheme="teal" ml="3">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
