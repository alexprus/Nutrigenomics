import React, { useState } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResultsPage from './components/SearchResultsPage';
import data from './components/data';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results/:query" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleViewProfile = () => {
    
  };

  return (
    <Box bgGradient="linear(to-r, blue.500, red.500)" h="100vh">
      <Box textAlign="center" pt="10%">
        <Heading as="h1" size="2xl" color="white">
          Nutrigenomics App
        </Heading>
      </Box>
      <SearchBar onSearch={handleSearch} />
      <Box textAlign="center" mt="4">
        <Button colorScheme="teal" onClick={handleViewProfile}>
          View my nutrigenomic profile
        </Button>
      </Box>
    </Box>
  );
}

export default App;
