import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import '../styles/pages/pokemonAdd.css'

function PokemonAdd(){
    return(
        <div className="page-pokemonAdd">
                <Sidebar/>
            <div className="form-container">
            <Form id="form">
                <Form.Row>
                <Col>
                <Form.File
              className="image"
              required
              name="image"
              label="Pokemon Photo"
              id="image"
            />
            </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col xs={7}>
                    <Form.Control 
                        type="text" 
                        className="pokemonName" 
                        id="pokemonName"
                        placeholder="Pokemon Name" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="Generation Pokemon"
                        id="generationPokemon"
                        className="generationPokemon" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="Evolution stage"
                        id="evolutionStage"
                        className="evolutionStage" />
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    
                <Col>
                <Form.Control as="select" className="evolved" id="evolved">
                    <option selected disabled>Evolved?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                </Col>

                <Col>
                <Form.Control 
                        type="number" 
                        placeholder="Family ID"
                        id="familyId"
                        className="familyId" />
                </Col>

                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Type 1"
                        id="type1"
                        className="type1" />
                </Col>

                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Type 2"
                        id="type2"
                        className="type2" />
                </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Wheater 1"
                        id="wheater1"
                        className="wheater1" />
                </Col>

                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Wheater 2"
                        id="wheater2"
                        className="wheater2" />
                </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="stat Total"
                        id="statTotal"
                        className="statTotal" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="atk"
                        id="atk"
                        className="atk" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="def"
                        id="def"
                        className="def" />
                    </Col>

                    <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="sta"
                        id="sta"
                        className="sta" />
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                <Form.Control as="select" className="legendary" id="legendary">
                    <option selected disabled>Legendary?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                    </Col>

                    <Col>
                    <Form.Control
                        type="number"
                        placeholder="Aquireable"
                        id="aquireable"
                        className="aquireable"
                    />
                    </Col>

                    <Col>
                <Form.Control as="select" className="spawns" id="spawns">
                    <option selected disabled>Spawns</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                    </Col>
                    
                    <Col>
                <Form.Control as="select" className="regional" id="regional">
                    <option selected disabled>Regional</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                    </Col>

                    </Form.Row>
                    <br/>
                    <Form.Row>
                    <Col>
                    <Form.Control
                        type="number"
                        placeholder="Raidable"
                        id="raidable"
                        className="raidable"
                    />
                    </Col>

                    <Col>
                    <Form.Control
                        type="number"
                        placeholder="Hatchable"
                        id="hatchable"
                        className="hatchable"
                    />
                    </Col>

                    <Col>
                    <Form.Control
                        type="number"
                        placeholder="Shiny"
                        id="shiny"
                        className="shiny"
                    />
                    </Col>

                    <Col>
                <Form.Control as="select" className="nest" id="nest">
                    <option selected disabled>Nest</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                    </Col>

                    <Col>
                <Form.Control as="select" className="newPoke" id="newPoke">
                    <option selected disabled>New</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                    </Col>
                    </Form.Row>
                    <br/>

                <Form.Row>
                <Col>
                <Form.Control as="select" className="notGettable" id="notGettable">
                    <option selected disabled>Not gettable?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                    </Col>
                    <Col>
                <Form.Control as="select" className="futureEvolved" id="futureEvolved">
                    <option selected disabled>Future evolved?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </Form.Control>
                    </Col>
                    <Col>
                    <Form.Control
                        type="number"
                        placeholder="CP39"
                        id="cp39"
                        className="cp39"
                    />
                    </Col>
                    <Col>
                    <Form.Control
                        type="number"
                        placeholder="CP40"
                        id="cp40"
                        className="cp40"
                    />
                    </Col>
                </Form.Row>
                <br/>
                <Button className="buttonForm" variant="danger">Cancel</Button>
                <Button type="submit" className="buttonForm" variant="success">Save</Button>


                </Form>
                </div>
            </div>
    )
}

export default PokemonAdd