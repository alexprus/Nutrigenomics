// SearchResultsPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import data from './data';

function SearchResultsPage() {
  const { query } = useParams();

  // Filter the data based on the search query
  const filteredResults = data.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // Check if results is empty
  if (filteredResults.length === 0) {
    return (
      <Box bgGradient="linear(to-r, blue.500, red.500)" h="100vh">
        <Box textAlign="center" pt="10%">
          <Heading as="h1" size="2xl" color="white">
            Oops!
          </Heading>
        </Box>
        <Box color="white" textAlign="center" mt="4">
          No results found for: {query}
        </Box>
      </Box>
    );
  }

  // Render search results
  return (
    <Box bgGradient="linear(to-r, blue.500, red.500)" h="100vh">
      <Box textAlign="left" pt="5%" pl="4">
        <Heading as="h1" size="2xl" color="white">
          Database
        </Heading>
      </Box>
      <Box mt="4" pl="4">
      <Heading as="h2" size="lg" color="white" mb="4"> {/* Added size="lg" and color="white" */}
          Search Results
        </Heading>        <ul>
          {filteredResults.map((result, index) => (
            <li key={index}>
              <h2>{result.name}</h2>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default SearchResultsPage;
