import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterCards from "./CharacterCards";
import { StyledApp, StyledHeader} from './AppStyles';

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
  <StyledApp>
      <StyledHeader>React Wars</StyledHeader>
      <CharacterCards characters={characters} />
  </StyledApp>
  );
};

export default App;
