import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterCards = props => {
  const { characters } = props;

  return (
    <div>
      {characters.map(character => {
        return (
          <CharacterCard
            name={character.name}
            mass={character.mass}
            height={character.height}
            hairColor={character.hair_color}
            eyeColor={character.eye_color}
          />
        );
      })}
    </div>
  );
};

export default CharacterCards;
