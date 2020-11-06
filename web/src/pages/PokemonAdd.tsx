import React from 'react'
import {Form, Col} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import '../styles/pages/pokemonAdd.css'

function PokemonAdd(){
    return(
        <div className="page-pokemonAdd">
                <Sidebar/>
            <div className="form-container">
            <Form>
                <Form.Row>
                    <Col xs={7}>
                    <Form.Control 
                        type="text" 
                        className="pokemonName" 
                        id="pokemonName"
                        placeholder="Nome do pokemon" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="Geração do pokemon"
                        id="generationPokemon"
                        className="generationPokemon" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="Estágio de evolução"
                        id="evolutionStage"
                        className="evolutionStage" />
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col xs={7}>
                    <Form.Control 
                        type="text" 
                        className="pokemonName" 
                        id="pokemonName"
                        placeholder="Nome do pokemon" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="Geração do pokemon"
                        id="generationPokemon"
                        className="generationPokemon" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="Estágio de evolução"
                        id="evolutionStage"
                        className="evolutionStage" />
                    </Col>
                </Form.Row>
                </Form>
                </div>
            </div>
    )
}

export default PokemonAdd