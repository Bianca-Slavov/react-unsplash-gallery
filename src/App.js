import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Search beautiful <strong>free</strong> high-resolution photos
      <SearchBar />
      </header>
    </div>
  );
}

export default App;
