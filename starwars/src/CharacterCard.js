import React from "react";
import { StyledCard } from './AppStyles';

const CharacterCard = props => {
  const { name, mass, height, hairColor, eyeColor } = props;

  return (
    <StyledCard>
      <h1>{name}</h1>
      <p>{mass}</p>
      <p>{height}</p>
      <p>{hairColor}</p>
      <p>{eyeColor}</p>
    </StyledCard>
  );
};

export default CharacterCard;
