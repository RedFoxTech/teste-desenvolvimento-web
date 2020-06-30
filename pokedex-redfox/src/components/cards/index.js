import React from 'react'
import {MainContainer} from './styles'

function PokemonCard (props) {

    let color1 = "";
    let color2 = "";
    // if (props.PokeType === "grass") {
    //     color = "#a3ff84";
    // }

    switch(props.PokeType){
        case "grass":
            color1 = "#a3ff84";
            break;
        case "poison":
            color1 = "#ad3aad";
            break;
        case "water":
            color1 = "lightblue";
            break;
        case "fire":
            color1 = "#ff4949";
            break;
        case "bug":
            color1 = "#C2CE63"
            break;
        case "flying":
            color1 = "#C2B2F5"
            break;
        case "normal":
            color1 = "#CDC495"
            break;
        case "electric":
            color1 = "#FAE47D"
            break;
        case "ground":
            color1 = "#baa266"
            break;
        case "fairy":
            color1 = "#EE99AC"
            break;
        case "fighting":
            color1 = "#C03028"
            break;
        case "psychic":
            color1 = "#F85888"
            break;
        case "rock":
            color1 = "#B8A038"
            break;
        case "ghost":
            color1 = "#9B8BB7";
            break;
        case "ice":
            color1 = "#98D8D8"
            break;
        case "dragon":
            color1 = "#7038F8"
            break;
        case "dark":
            color1 = "#9B8B7F";
            break;
        case "steel":
            color1 = "#B8B8D0"
            break;
        
        
        default:
            break;
            
    }

    switch(props.PokeType2){
        case "grass":
            color2 = "#a3ff84";
            break;
        case "poison":
            color2 = "#ad3aad";
            break;
        case "water":
            color2 = "lightblue";
            break;
        case "fire":
            color2 = "#ff4949";
            break;
        case "bug":
            color2 = "#C2CE63"
            break;
        case "flying":
            color2 = "#C2B2F5"
            break;
        case "normal":
            color2 = "#CDC495"
            break;
        case "electric":
            color2 = "#FAE47D"
            break;
        case "ground":
            color2 = "#baa266"
            break;
        case "fairy":
            color2 = "#EE99AC"
            break;
        case "fighting":
            color2 = "#C03028"
            break;
        case "psychic":
            color2 = "#F85888"
            break;
        case "rock":
            color2 = "#B8A038"
            break;
        case "ghost":
            color2 = "#9B8BB7";
            break;
        case "ice":
            color2 = "#98D8D8"
            break;
        case "dragon":
            color2 = "#7038F8"
            break;
        case "dark":
            color2 = "#9B8B7F";
            break;
        case "steel":
            color2 = "#B8B8D0"
            break;
        
        
        default:
            break;
            
    }


    let PokeImgId = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ props.PokeImg + ".png"

    
    return (
        
        <MainContainer background1={color1} background2={color2}>

            <img src={PokeImgId} alt="Pokemon"></img>

            <span> {props.Pokename} </span>
            
        </MainContainer>
    )
}

export default PokemonCard;