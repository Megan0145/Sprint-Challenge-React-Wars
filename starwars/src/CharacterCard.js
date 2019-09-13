import React from 'react';

const CharacterCard = (props) => {
const {name, mass, height, hairColor, eyeColor} = props;

return (
    <div>
        <h1>{name}</h1>
        <p>{mass}</p>
        <p>{height}</p>
        <p>{hairColor}</p>
        <p>{eyeColor}</p>
    </div>
); 

}

export default CharacterCard;