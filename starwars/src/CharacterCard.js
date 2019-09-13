import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
width:200px;
height:200px;
background-color: white;
`;


function CharacterCard(props) {

    return (
       <StyledCard>
            <h3>{props.name}</h3>
            <p>{props.height}</p>
            <p>{props.mass}</p>
        </StyledCard>
    );
    }

export default CharacterCard;