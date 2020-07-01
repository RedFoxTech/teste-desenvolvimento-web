import styled from 'styled-components';

export const PokeDetailsContainer = styled.div `

    width: 98vw;
    height: 60vh;
    border: 1px solid black;
    border-radius: 10px;
    background-color: lightblue;
    display: flex;

    
`

export const PainelHeader = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-align: center;
        height: 70px;
        background-color: white;
        width: 98vw;
`

export const PokemonSprite = styled.div `
    border: 1px solid red;
    height: 200px;
    width: 50vw;
    display: flex;
    justify-content: center;

    img {
        display: flex;
        width: 170px;
    }

`

export const PokeTypeHeader = styled.div `
    display: flex;
    border: 1px solid black;
    width: 50vw;
    justify-content: space-around;
    height: 40px;
    align-items: center;

    span:first-child {
        background: green;
        margin: 10px;
    }

    span{
        background: lightpink;
    }
`
export const PokeAttributes = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    height: 160px;
`
