import React, { useState } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import SearchBar from './components/Search.jsx';
import NavigationButton from './components/NavigationButton.jsx';
import data from './data/data.json';
import SearchResultsPage from './components/SearchResultsPage.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <Router>
      <Box bgGradient="linear(to-r, blue.500, red.500)" h="100vh">
        <Center flexDir="column" paddingTop="250px">
          <Heading size="2xl" color="white" marginBottom="20px">
            Methylation App
          </Heading>
          <Switch>
            <Route exact path="/">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              <ul>
                {searchResults.map(item => (
                  <li key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
              <NavigationButton />
            </Route>
            <Route path="/search-results">
              <SearchResultsPage searchResults={searchResults} />
            </Route>
          </Switch>
        </Center>
      </Box>
    </Router>
  );
}

export default App;