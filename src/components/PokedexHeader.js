import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default function PokedexHeader() {
    return (
        <Jumbotron style={{height: '90vh'}}>
        <h1>PokeDex</h1>
        <p>
          Para entrar no Pokedex, clique no botão "Categoria"
        </p>
      </Jumbotron>
    )
}
