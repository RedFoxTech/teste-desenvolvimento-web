import React from 'react'
import './SortHeader.css'

const buttonNames = ["Row", "Name", "Pokedex Number", "Img name", "Generation", "Evolution Stage", "Evolved", "FamilyID", "Cross Gen", "Type 1", "Type 2", "Weather 1", "Weather 2", "STAT TOTAL", "ATK", "DEF", "STA", "Legendary", "Aquireable","Spawns", "Regional", "Raidable", "Hatchable", "Shiny", "Nest", "New", "Not-Gettable", "Future Evolve", "100% CP @ 40", "100% CP @ 39"]//["Name", "Pokedex Number", "Image Name", "Generation", "Evolution Stage", "Evolved", "Family ID", "Cross Gen", "Type 1", "Type 2", "Weather 1", "Weather 2", "Stat Total", "ATK", "DEF", "STA","Legendary","Spawns","Regional","Raidable","Hatchable","Shiny", "Nest","New", "Not-Gettable","Future Evolve","100% CP @ 40", "100% CP @ 39"]

const SortHeader = (props) => {
    let buttonsComp = buttonNames.map( (name, i) => <HeaderButton key={i} onClickHandler = {props.onClickHandler} buttonText = {name} /> )
    return ( <div className="card-header">{buttonsComp}</div> )
}

const HeaderButton = (props) => <div><button onClick={() => { props.onClickHandler(props.buttonText) }} className="btn-large waves-effect red">{props.buttonText}</button></div>

export default SortHeader