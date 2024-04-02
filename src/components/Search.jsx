import React from 'react';
import { Box, Input } from '@chakra-ui/react';

function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <Box width="300px" marginTop="20px">
      <Input
        placeholder="Search foods..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </Box>
  );
}

export default SearchBar;
