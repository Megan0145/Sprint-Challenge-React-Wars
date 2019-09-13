import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [yob, setYob] = useState('');

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        response.data.results.map(person => {
          console.log(person);
        });
        console.log(response.data.results);
      })
      .catch(error => {
        debugger
      });
  }, );

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
