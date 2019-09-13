import React from 'react';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 80vw;
    background-color: grey;

`;

function CharacterCards(props) {
const characters=props.characters;

   return (
        <StyledContainer>
            <h3>Characters</h3>
             <CharacterCard name={props.name} height={props.height} mass={props.mass} />;
        </StyledContainer>
   );
   }


export default CharacterCards;