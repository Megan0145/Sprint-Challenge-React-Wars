import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterCards from './CharacterCards';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const API = "https://swapi.co/api/people";

  useEffect(() => {
    axios
      .get(API)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCards characters={characters} />
    </div>
  );
};

export default App;
