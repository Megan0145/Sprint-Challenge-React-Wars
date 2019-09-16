import React from "react";
import { StyledCard } from './AppStyles';

const CharacterCard = props => {
  const { name, mass, height, hairColor, eyeColor } = props;

  return (
    <StyledCard>
      <h1>{name}</h1>
      <p><span>Mass: </span>{mass}</p>
      <p><span>Height: </span>{height}</p>
      <p><span>Hair Colour: </span>{hairColor}</p>
      <p><span>Eye Colour: </span>{eyeColor}</p>
    </StyledCard>
  );
};

export default CharacterCard;
