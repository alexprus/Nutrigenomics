
import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) { // Search bar component
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => { // Handles input to the search query
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => { // Handles submission of the search query
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
    navigate(`/search-results/${query}`);
  };

  return ( // Base form for the search bar
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
        sx={{ '::placeholder': { color: 'white' } }} // Custom CSS
        placeholderTextColor="white"
      />
      <Button type="submit" colorScheme="yellow" ml="3">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
