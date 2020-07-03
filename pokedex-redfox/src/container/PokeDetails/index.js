import React, { useEffect } from 'react'
import { PokeDetailsContainer, PainelHeader, PokemonSprite, PokeTypeHeader, PokeAttributes, BackgroundPokeDetails } from './styles.js'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/index.js'
import { returnBackground } from '../../components/cards/setbackground'

function PokeDetails(props) {

    const history = useHistory()


    useEffect(() => {
        if (props.selectedPokemon === null) {
            history.push('/')
        }
    }, [])

    if (props.selectedPokemon === null) {
        return (<p>Loading</p>)
    }

    let PokeSelectedImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.selectedPokemon.Row + ".png"

    let color1 = returnBackground(props.selectedPokemon["Type 1"]);
    let color2 = returnBackground(props.selectedPokemon["Type 2"]);

    return (

        <BackgroundPokeDetails  background1={color1} background2={color2}>
            <Header />

            <PainelHeader>
                <h1>{props.selectedPokemon.Name}</h1>
            </PainelHeader>

            <PokeDetailsContainer background1={color1} background2={color2}>

                <PokemonSprite>

                    <img src={PokeSelectedImg} />

                </PokemonSprite>

                <div className="PokeInfo">
                    <PokeTypeHeader spanBg1={color1} spanBg2={color2}>

                        <div>
                            <span> {props.selectedPokemon["Type 1"]} </span>
                            <span> {props.selectedPokemon["Type 2"]} </span>
                        </div>

                        <div>
                            <h1>#{props.selectedPokemon.Row}</h1>
                        </div>

                    </PokeTypeHeader>

                    <PokeAttributes>

                        <p>Attack: {props.selectedPokemon.ATK}</p>
                        <p>Defense: {props.selectedPokemon.DEF}</p>
                        <p>Stamina: {props.selectedPokemon.STA}</p>
                        <p>Stat Total:{props.selectedPokemon["STAT TOTAL"]}</p>

                    </PokeAttributes>

                </div>
            </PokeDetailsContainer>
        </BackgroundPokeDetails>
    )
}

export default PokeDetails;