import React from 'react';

function SearchResultsPage({ searchResults }) {
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map(item => (
          <li key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsPage;