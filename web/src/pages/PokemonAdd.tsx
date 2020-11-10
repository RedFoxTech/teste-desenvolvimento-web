import React, { ChangeEvent } from 'react'
import {Form, FormControl, Col, Button, InputGroup} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import '../styles/pages/pokemonAdd.css'

function PokemonAdd(){


    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        console.log(event)
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
                        className="generationPokemon"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>
                    
                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="Evolution stage"
                        id="evolutionStage"
                        className="evolutionStage"
                        onChange={handleInputChange}
                         />
                        </InputGroup>
                    </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl as="select" className="evolved" id="evolved">
                    <option selected disabled defaultValue="true">Evolved?</option>
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
                        className="familyId"
                        onChange={handleInputChange}
                         />
                </InputGroup>        
                </Col>
                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Type 1"
                        id="type1"
                        className="type1"
                        onChange={handleInputChange}
                         />
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Type 2"
                        id="type2"
                        className="type2"
                        onChange={handleInputChange} />
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
                        className="wheater1"
                        onChange={handleInputChange}
                         />
                </InputGroup>
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Wheater 2"
                        id="wheater2"
                        className="wheater2" 
                        onChange={handleInputChange}
                        />
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
                        className="statTotal"
                        onChange={handleInputChange} />
                    </InputGroup> 
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="atk"
                        id="atk"
                        className="atk"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>

                    <Col>

                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="def"
                        id="def"
                        className="def"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="sta"
                        id="sta"
                        className="sta"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <InputGroup>
                <FormControl as="select" className="legendary" id="legendary">
                    <option selected disabled defaultValue="true">Legendary?</option>
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
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                <InputGroup>
                <FormControl as="select" className="spawns" id="spawns">
                    <option selected disabled defaultValue="true">Spawns</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    
                    <Col>
                <InputGroup>
                <FormControl as="select" className="regional" id="regional">
                    <option selected disabled defaultValue="true">Regional</option>
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="nest" id="nest">
                    <option selected disabled defaultValue="true">Nest</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="newPoke" id="newPoke">
                    <option selected disabled defaultValue="true">New</option>
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
                    <option selected disabled defaultValue="true">Not gettable?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    <Col>
                <InputGroup>
                <FormControl as="select" className="futureEvolved" id="futureEvolved">
                    <option selected defaultValue="true" disabled>Future evolved?</option>
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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