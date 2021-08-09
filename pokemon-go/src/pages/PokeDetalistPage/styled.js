import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight:lighter;    
`

export const ContainerTabela = styled.div`
    width: 50vw;
    margin-top: 5vw;
    text-align: center;
    display: flex;
    flex-direction: column;  

    thead {
        width: 30vw;
    }

    tbody {
        width: 30vw;
    }
    
`

export const PokemonContainer = styled.div`
    text-align: center;
    margin-top: 5vw;
    p {
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 2vw;
  
    }

`

export const VoltarContainer = styled.div`
    border: 1px solid #353839;
    border-radius: 5px;
    width: 8vw;
    height: 4vh;
    font-size: 1.3rem;
    text-align: center;
    margin-top: 4vw;
    cursor: pointer;

    :active {
        opacity: 0.2;
    }
`

