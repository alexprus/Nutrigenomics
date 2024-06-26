import React, { useState } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResultsPage from './components/SearchResultsPage';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component

function App() {
  return ( // Route configuration for the app
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results/:query" element={<SearchResultsPage />} />
        <Route path="/profile" element={<ProfilePage />} /> 
      </Routes>
    </Router>
  );
}

function HomePage() {
    // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (query) => {
    setSearchQuery(query);

  };

  const handleViewProfile = () => {
    // Navigate to the ProfilePage when the button is clicked
    navigate('/profile');
  };

  return ( // Base JS for HomePage component
    <Box bgGradient="linear(to-r, #ff00cc, #00ff00)" h="100vh">
      <Box textAlign="center" pt="10%">
        <Heading as="h1" size="2xl" color="white">
          Nutrigenomics App
        </Heading>
      </Box>
      <SearchBar onSearch={handleSearch} />
      <Box textAlign="center" mt="4">
        <Button colorScheme="pink" onClick={handleViewProfile}>
          View my nutrigenomic profile
        </Button>
      </Box>
      <Box textAlign="center" mt="4">
      </Box>
    </Box>
  );
}

export default App;
