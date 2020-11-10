import React, { ChangeEvent } from 'react'
import {Form, FormControl, Col, Button, InputGroup} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import '../styles/pages/pokemonAdd.css'

function PokemonAdd(){


    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        
    }

    return(
        <div className="page-pokemonAdd">
                <Sidebar/>
            <div className="form-container">
            <Form id="form">
                
            <Col>
                <Form.File
              className="image"
              required
              name="image"
              label="Pokemon Photo"
              id="image"
            />
            </Col>
               <br/>

                <Form.Row>
                    <Col xs={7}>
                    <InputGroup>
                         <FormControl
                             placeholder="Pokemon Name"
                             aria-label="namePokemon"
                             className="namePokemon"
                             id="namePokemon"
                             onChange={handleInputChange}
                                />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="Generation Pokemon"
                        id="generationPokemon"
                        className="generationPokemon" />
                    </InputGroup>
                    </Col>
                    
                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="Evolution stage"
                        id="evolutionStage"
                        className="evolutionStage" />
                        </InputGroup>
                    </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl as="select" className="evolved" id="evolved">
                    <option selected disabled>Evolved?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="number" 
                        placeholder="Family ID"
                        id="familyId"
                        className="familyId" />
                </InputGroup>        
                </Col>
                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Type 1"
                        id="type1"
                        className="type1" />
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Type 2"
                        id="type2"
                        className="type2" />
                </InputGroup>      
                </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Wheater 1"
                        id="wheater1"
                        className="wheater1" />
                </InputGroup>
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Wheater 2"
                        id="wheater2"
                        className="wheater2" />
                </InputGroup>       
                </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="stat Total"
                        id="statTotal"
                        className="statTotal" />
                    </InputGroup> 
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="atk"
                        id="atk"
                        className="atk" />
                    </InputGroup>
                    </Col>

                    <Col>

                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="def"
                        id="def"
                        className="def" />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="sta"
                        id="sta"
                        className="sta" />
                    </InputGroup>
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <InputGroup>
                <FormControl as="select" className="legendary" id="legendary">
                    <option selected disabled>Legendary?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Aquireable"
                        id="aquireable"
                        className="aquireable"
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                <InputGroup>
                <FormControl as="select" className="spawns" id="spawns">
                    <option selected disabled>Spawns</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    
                    <Col>
                <InputGroup>
                <FormControl as="select" className="regional" id="regional">
                    <option selected disabled>Regional</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    </Form.Row>
                    <br/>
                    <Form.Row>
                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Raidable"
                        id="raidable"
                        className="raidable"
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Hatchable"
                        id="hatchable"
                        className="hatchable"
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Shiny"
                        id="shiny"
                        className="shiny"
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="nest" id="nest">
                    <option selected disabled>Nest</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="newPoke" id="newPoke">
                    <option selected disabled>New</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    </Form.Row>
                    <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl as="select" className="notGettable" id="notGettable">
                    <option selected disabled>Not gettable?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    <Col>
                <InputGroup>
                <FormControl as="select" className="futureEvolved" id="futureEvolved">
                    <option selected disabled>Future evolved?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="CP39"
                        id="cp39"
                        className="cp39"
                    />
                    </InputGroup>
                    </Col>
                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="CP40"
                        id="cp40"
                        className="cp40"
                    />
                    </InputGroup>
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