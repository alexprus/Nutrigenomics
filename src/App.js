import React, { useState } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResultsPage from './components/SearchResultsPage';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results/:query" element={<SearchResultsPage />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
      </Routes>
    </Router>
  );
}

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleViewProfile = () => {
    // Navigate to the ProfilePage when the button is clicked
    navigate('/profile');
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
        <Button colorScheme="purple" onClick={handleViewProfile}>
          View my nutrigenomic profile
        </Button>
      </Box>
    </Box>
  );
}

export default App;
