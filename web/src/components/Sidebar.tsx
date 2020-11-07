import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/sidebar.css'
import pokeGym from '../images/pokeGym.png'
import pokemobile from '../images/pokemobile.png'
import pokeball from '../images/pokeball.png'
import pokeshop from '../images/pokeshop.png'
import pokemed from '../images/pokemed.png'

function Sidebar(){
    return(
        <aside>
        <h1>Pokedéx</h1>
        <Link to="/home" className="icons">
          <img src={pokeball} alt=""/>
            <p>Home</p>
          </Link> 
        <a href="#"><img className="pokeGym" src={pokeGym} alt=""/>
            <p>Ginásio</p>
        </a> 
        <Link to="/pokemonAdd"><img src={pokemobile} alt=""/>
            <p>Cadastrar</p>
        </Link> 
        <a href="#"><img src={pokeshop} alt=""/>
          <p>Poke Shop</p>
        </a> 
        <a href="#"><img src={pokemed} alt=""/>
          <p>Poke Med</p>
        </a> 
    </aside>
    )
}
export default Sidebar