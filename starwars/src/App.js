import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import CharacterCards from './CharacterCards';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [characters, setCharacters] = useState([]);
  let [name, setName] = useState('');
  let [height, setHeight] = useState('');
  let [mass, setMass] = useState('');
  const [yob, setYob] = useState('');

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
          setCharacters(response.data.results);
          console.log(characters);
      })
      .catch(error => {
        debugger
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    <CharacterCards name={name} height={height} mass={mass} setName={setName} setHeight={setHeight} setMass={setMass} characters={characters}>
      
    </CharacterCards>
    </div>
  );
}

export default App;
