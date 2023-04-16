import React, { useState } from 'react';
import axios from 'axios';
import "./style.css"

function GitHubUserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Find Git Hub Profiles against your entered name:- </h1>
      

      <label htmlFor="search-input">Enter a GitHub username:</label>
      <input
        type="text"
        id="search-input"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li>
            <a href={result.html_url}>
              <img src={result.avatar_url} alt={`Avatar not loaded yet`} />
              {result.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GitHubUserSearch;