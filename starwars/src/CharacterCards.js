import React from "react";
import CharacterCard from "./CharacterCard";
import { StyledCardsContainer } from './AppStyles';

const CharacterCards = props => {
  const { characters } = props;

  return (
    <StyledCardsContainer>
        <h2>Characters</h2>
      {characters.map(character => {
        return (
          <CharacterCard
            key={character.name}
            name={character.name}
            mass={character.mass}
            height={character.height}
            hairColor={character.hair_color}
            eyeColor={character.eye_color}
          />
        );
      })}
    </StyledCardsContainer>
  );
};

export default CharacterCards;
