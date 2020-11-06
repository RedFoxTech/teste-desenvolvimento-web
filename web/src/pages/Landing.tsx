import React from 'react'
import logoImg from '../images/pokedex.png'
import Button from 'react-bootstrap/Button'
import { FiArrowRight } from 'react-icons/fi'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/landing.css'

function Landing(){
    return(
        <div className="page-landing">
            <div className="content-wrapper">
                <div className="content-img">
                <img id="logo" src={logoImg} alt=""/>
                <h1>Pokedéx</h1>
                </div>

                <main>
                    <h1>Seja bem vindo</h1>
                    <p>Você está na sua pokedéx online. Entre para saber mais sobre pokemons!</p>
                </main>

            <div className="location">
              <strong>Itanhaém</strong>
              <span>São Paulo</span>
            </div>

            <Button className="enter-app" variant="danger">
             <FiArrowRight size={30} color="rgba(250, 250, 250, 250)"/>
            </Button>

            </div>
        </div>
    )
}

export default Landing