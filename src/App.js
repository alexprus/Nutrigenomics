// App.js

import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

  return (
    <Box bgGradient="linear(to-r, blue.500, red.500)" h="100vh">
      <Box textAlign="center" pt="10%">
        <Heading as="h1" size="2xl" color="white">
          Methylation App
        </Heading>
      </Box>
      <SearchBar onSearch={handleSearch} />
    </Box>
  );
}

export default App;
