import styled from 'styled-components';

export const BackgroundPokeDetails = styled.div `
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background: ${props => {
        if (props.background1 && props.background2){
            return `linear-gradient(90deg, ${props.background1} 50%, ${props.background2} 50%);`
        }
        else {
            return props.background1
        }
    }};
`

export const PokeDetailsContainer = styled.div `

    width: 98vw;
    height: 60vh;
    border: 3px solid black;
    border-radius: 10px;
    background: white;
    opacity: 0.9;

    display: flex;
    margin-left: 3px;

    
`

export const PainelHeader = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-align: center;
        height: 70px;
        width: 98vw;
`

export const PokemonSprite = styled.div `
    height: 200px;
    width: 50vw;
    display: flex;
    justify-content: center;
    border-radius: 10px;

    img {
        display: flex;
        width: 120px;
        height: 120px;
    }

`

export const PokeTypeHeader = styled.div `
    display: flex;
    width: 50vw;
    justify-content: space-between;
    height: 40px;
    align-items: center;

    
    span:first-child {
        background: ${props => props.spanBg1};
        margin-right: 10px;
    }

    span{
        background: ${props => {
            if (props.spanBg2 === ""){
                return `""`
        }
        else {
            return props.spanBg2
        };
    }}};

`
export const PokeAttributes = styled.div `
    display: flex;
    flex-direction: column;
    height: 160px;
`
