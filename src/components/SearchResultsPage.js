import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Table, Tbody, Tr, Th, Td, Button, Text, HStack } from '@chakra-ui/react';
import data from './data';

function SearchResultsPage() { // Search results page component
  const { query } = useParams();
  const [ratings, setRatings] = useState({});

  // Filter the data based on the search query
  const filteredResults = data.filter(item =>
    item.food.toLowerCase().includes(query.toLowerCase())
  );

  // Function to handle button click and display rating
  const handleRatingClick = (food) => {
    const rating = food.rating; // Fetch the rating
    setRatings({ ...ratings, [food.food]: rating });
  };

  // Render search results
  return (
    <Box bgGradient="linear(to-r, green.500, blue.200)" minHeight="100vh" overflow="hidden">
      <Box textAlign="left" pt="5%" pl="4">
        <Heading as="h1" size="2xl" color="white">
          Database
        </Heading>
      </Box>
      <Box mt="4" pl="4" pr="4">
        {filteredResults.length > 0 ? (
          <>
            <Heading as="h2" size="lg" color="white" mb="4">
              Search Results for: {query}
            </Heading>
            {filteredResults.map((result, idx) => ( // Logic for calculation button
              <HStack key={idx} mb="4">
                <Button colorScheme="yellow" onClick={() => handleRatingClick(result)}>
                  Calculate Rating for {result.food}
                </Button>
                {ratings[result.food] && ( // Display rating
                  <Text color="white">Certified Nutrigenomics App Rating: {ratings[result.food]}</Text>
                )}
              </HStack>
            ))}
            <Table variant="striped" colorScheme="whiteAlpha">
              <Tbody> 
                {Object.keys(filteredResults[0].criteria).map((category, index) => ( // Maps over criteria data
                  <Tr key={index}>
                    <Th color="white">{category}</Th>
                    {filteredResults.map((result, idx) => (
                      <Td key={idx}>
                        <ul>
                          {result.criteria[category].map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        ) : ( // Error message if no results are found
          <Box textAlign="center" pt="10%"> 
            <Heading as="h1" size="2xl" color="white">
              Oops!
            </Heading>
            <Box color="white" textAlign="center" mt="4">
              We couldn't find "{query}" in our database. 
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchResultsPage;
