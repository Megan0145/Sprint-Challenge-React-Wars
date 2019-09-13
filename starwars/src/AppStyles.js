import styled from 'styled-components';

// font-family: 'Righteous', cursive;
// font-family: 'Orbitron', sans-serif;
// font-family: 'Lalezar', cursive;

const StyledApp = styled.div`
    text-align: center;
    
`;

const StyledHeader = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    font-family: 'Orbitron';
    font-size: 5rem;
    transition: transform 0.8s ease-in-out;
    :hover {
      transform: rotate(360deg);
    }
`;

const StyledCardsContainer = styled.div`
    width: 70vw;
    background-color: rgba(133,133,133,0.3);
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 3rem;
    align-items: center;
    margin-bottom: 3rem;
    h2 {
        width: 100%;
        font-family: 'Orbitron', sans-serif;
        font-size: 3rem;
        margin-bottom: 3rem;
    }
`;

const StyledCard = styled.div`
    width: 40%;
    background-color: white;
    margin-bottom: 2rem;
    text-align: left;
    padding: 2rem 0 2rem 2rem;
    box-shadow: 5px 5px #848484;
    h1{
        font-family: 'Orbitron', sans-serif;
    }
    p {
        font-size: 22px;
        font-family: 'Roboto', sans-serif;
        span{
            font-weight: bold;
        }
    }
`;

export { StyledApp, StyledHeader, StyledCardsContainer, StyledCard };