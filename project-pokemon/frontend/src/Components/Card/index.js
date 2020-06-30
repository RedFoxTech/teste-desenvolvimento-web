import React from 'react';
import styled from 'styled-components';
import './index.css'

const ContainerCard = styled.div`
margin-top:50px;
margin-bottom:15px;
`

const TextInformation = styled.p`
font-size:17px;
`

const TextInformationYellow = styled.b`
color:yellow;
`

const Title = styled.h6`
margin-top:10px;
margin-bottom:20px;
color:black;
`

function Card (props){
    return( 
        <ContainerCard>
            <div class="cards-list">
                <div class="card 1">
                    <div class="card_image flip-card-front"> 
                        <img src="https://i.pinimg.com/originals/fb/3a/41/fb3a41cb36290985fbbd86ad11a2bcc5.jpg" /> 
                        <p class="card_title title-red">{props.pokemon.pokemonName}</p>  
                    </div>
                    <div class="flip-card-back">
                        <Title>DESCRIPTION</Title>
                        <TextInformation><TextInformationYellow>Type:</TextInformationYellow> {props.pokemon.type1}</TextInformation>
                        <TextInformation><TextInformationYellow>Attack:</TextInformationYellow> {props.pokemon.atk}</TextInformation>
                        <TextInformation><TextInformationYellow>Defense:</TextInformationYellow> {props.pokemon.def}</TextInformation>
                        <TextInformation><TextInformationYellow>Stat Total:</TextInformationYellow> {props.pokemon.statTotal}</TextInformation>
                        <TextInformation><TextInformationYellow>Weather One:</TextInformationYellow> {props.pokemon.weather1}</TextInformation>
                        <TextInformation><TextInformationYellow>Weather Two:</TextInformationYellow> {props.pokemon.weather2}</TextInformation>
                    </div>
                </div>
            </div>
        </ContainerCard>
    )
}

export default Card