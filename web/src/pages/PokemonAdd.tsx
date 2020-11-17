import React, { useState, ChangeEvent, FormEvent } from 'react'
import {Form, FormControl, Col, Button, InputGroup} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import '../styles/pages/pokemonAdd.css'
import api from '../services/api'

function PokemonAdd(){
    const [namePokemon, setNamePokemon]= useState('')
    const [generation, setGeneration]= useState('')
    const [evolutionStage, setEvolutionStage]= useState('')
    const [familyId, setFamilyId]= useState('')
    const [type1, setType1]= useState('')
    const [type2, setType2]= useState('')
    const [weather1, setWeather1]= useState('')
    const [weather2, setWeather2]= useState('')
    const [statTotal, setStatTotal]= useState('')
    const [atk, setAtk]= useState('')
    const [def, setDef]= useState('')
    const [sta, setSta]= useState('')
    const [aquireable, setAquireable]= useState('')
    const [raidable, setRaidable]= useState('')
    const [hatchable, setHatchable]= useState('')
    const [shiny, setShiny]= useState('')
    const [cp39, setCp39]= useState('')
    const [cp40, setCp40]= useState('')
    const [cross, setCross] = useState('')
    const [evolved, setEvolved] = useState('')
    const [legendary, setLegendary] = useState('')
    const [spawns, setSpawns] = useState('')
    const [regional, setRegional] = useState('')
    const [nest, setNest] = useState('')
    const [newPoke, setNewPoke] = useState('')
    const [notGettable, setNotGettable] = useState('')
    const [futureEvolved, setFutureEvolved] = useState('')

    const [inputFile, setInputFile]= useState<File[]>([])

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
            return
          }
          const selectedImages = Array.from(event.target.files)
          setInputFile(selectedImages)
        }

    async function handleSubmit(event: FormEvent){
        event.preventDefault()
        

    const data= new FormData()
            data.append('namePokemon', namePokemon)
            data.append('generation', generation)
            data.append('evolutionStage', evolutionStage)
            data.append('familyId', familyId)
            data.append('cross', cross)
            data.append('type1', type1)
            data.append('type2', type2)
            data.append('weather1', weather1)
            data.append('weather2', weather2)
            data.append('statTotal', statTotal)
            data.append('atk', atk)
            data.append('def', def)
            data.append('sta', sta)
            data.append('aquireable', aquireable)
            data.append('raidable', raidable)
            data.append('hatchable', hatchable)
            data.append('shiny', shiny)
            data.append('cp39', cp39)
            data.append('cp40', cp40)
            data.append('evolved', evolved)
            data.append('legendary', legendary)
            data.append('spawns', spawns)
            data.append('regional', regional)
            data.append('nest', nest)
            data.append('newPoke', newPoke)
            data.append('notGettable', notGettable)
            data.append('futureEvolved', futureEvolved)
    
        inputFile.forEach(image=>{
        data.append('image', image)
         })
    
    console.log(data)
    await api.post('pokemon', data)
    alert('Pokemon Create')
}
    return(
        <div className="page-pokemonAdd">
                <Sidebar/>
            <div className="form-container">
            <Form onSubmit={handleSubmit} id="form">
                
            <Col>
                <InputGroup>
                <FormControl
                type="file"
              className="image"
              required
              id="image"
              onChange={handleSelectImages}
            />
            </InputGroup>
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
                             value={namePokemon}
                             onChange={event => setNamePokemon(event.target.value)}
                                />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="Generation Pokemon"
                        id="generation"
                        className="generation"
                        onChange={event => setGeneration(event.target.value)}
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
                        onChange={event => setEvolutionStage(event.target.value)}
                         />
                        </InputGroup>
                    </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl as="select" className="evolved" id="evolved" onChange={event => setEvolved(event.target.value)}>
                    <option value="">Evolved?</option>
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
                        onChange={event => setFamilyId(event.target.value)}
                         />
                </InputGroup>        
                </Col>
                <Col>
                <InputGroup>
                <FormControl as="select" className="cross" id="cross" onChange={event => setCross(event.target.value)}>
                    <option value="">cross?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                </Col>
                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Type 1"
                        id="type1"
                        className="type1"
                        onChange={event => setType1(event.target.value)}
                         />
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Type 2"
                        id="type2"
                        className="type2"
                        onChange={event => setType2(event.target.value)} />
                </InputGroup>      
                </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Weather 1"
                        id="weather1"
                        className="weather1"
                        onChange={event => setWeather1(event.target.value)}
                         />
                </InputGroup>
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Weather 2"
                        id="weather2"
                        className="weather2" 
                        onChange={event => setWeather2(event.target.value)}
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
                        onChange={event => setStatTotal(event.target.value)} />
                    </InputGroup> 
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="atk"
                        id="atk"
                        className="atk"
                        onChange={event => setAtk(event.target.value)}
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
                        onChange={event => setDef(event.target.value)}
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
                        onChange={event => setSta(event.target.value)}
                         />
                    </InputGroup>
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <InputGroup>
                <FormControl as="select"  className="legendary" id="legendary" onChange={event => setLegendary(event.target.value)}>
                    <option value="">Legendary?</option>
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
                        onChange={event => setAquireable(event.target.value)}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                <InputGroup>
                <FormControl as="select" className="spawns" id="spawns" onChange={event => setSpawns(event.target.value)}>
                    <option value="">Spawns</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    
                    <Col>
                <InputGroup>
                <FormControl as="select" className="regional" id="regional" onChange={event => setRegional(event.target.value)}>
                    <option value="">Regional</option>
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
                        onChange={event => setRaidable(event.target.value)}
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
                        onChange={event => setHatchable(event.target.value)}
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
                        onChange={event => setShiny(event.target.value)}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="nest" id="nest" onChange={event => setNest(event.target.value)}>
                    <option value="">Nest</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="newPoke" id="newPoke" onChange={event => setNewPoke(event.target.value)}>
                    <option value="">New</option>
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
                <FormControl as="select" className="notGettable" id="notGettable" onChange={event => setNotGettable(event.target.value)}>
                    <option value="">Not gettable?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    <Col>
                <InputGroup>
                <FormControl as="select" className="futureEvolved" id="futureEvolved" onChange={event => setFutureEvolved(event.target.value)}>
                    <option value="">Future evolved?</option>
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
                        onChange={event => setCp39(event.target.value)}
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
                        onChange={event => setCp40(event.target.value)}
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