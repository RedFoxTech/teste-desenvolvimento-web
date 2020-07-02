import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'

export default function SaveForm({state, handleSubmit, setState, setFile, id=undefined}) {
  return (
    <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={state.name}
                    onChange={e => setState({...state, name: e.target.value})}
                    placeholder="Enter name"
                  />
                </Form.Group>
              </Col>

              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicPokedexNumber">
                  <Form.Label>Pokedex Number</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    value={state.pokedexNumber}
                    onChange={e => setState({...state, pokedexNumber: e.target.value})}
                    placeholder="Enter pokedex number" />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicGeneration">
                  <Form.Label>Generation</Form.Label>
                  <Form.Control
                  required
                  type="number"
                  placeholder="Enter generation"
                  onChange={e => setState({...state, generation: e.target.value})}
                  value={state.generation}
                />
                </Form.Group>
              </Col>

              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicEvolutionStage">
                  <Form.Label>Evolution Stage</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter evolution stage"
                    onChange={e => setState({...state, evolutionStage: e.target.value})}
                    value={state.evolutionStage}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicRaidable">
                  <Form.Label>Raidable</Form.Label>
                  <Form.Control
                  required
                  type="number"
                  placeholder="Enter raidable"
                  onChange={e => setState({...state, raidable: e.target.value})}
                  value={state.raidable}
                />
                </Form.Group>
              </Col>

              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicHatchable">
                  <Form.Label>Hatchable</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Enter hatchable"
                    onChange={e => setState({...state, hatchable: e.target.value})}
                    value={state.hatchable}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            
            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicFamilyId">
                  <Form.Label>Family Id</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter family id"
                    onChange={e => setState({...state, familyId: e.target.value})}
                    value={state.familyId}
                  />
                </Form.Group>
              </Col>

              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicAquireable">
                  <Form.Label>Aquireable</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Enter aquireable"
                    onChange={e => setState({...state, aquireable: e.target.value})}
                    value={state.aquireable}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicLVL40">
                  <Form.Label>LVL 40 100%CP</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter name"
                    onChange={e => setState({...state, cp_100_lvl40: e.target.value})}
                    value={state.cp_100_lvl40}
                  />
                </Form.Group>
              </Col>

              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicLVL39">
                  <Form.Label>LVL 39 100%CP</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Enter pokedex number"
                    onChange={e => setState({...state, cp_100_lvl39: e.target.value})}
                    value={state.cp_100_lvl39}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicType1">
                  <Form.Label>Type 1</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    onChange={e => setState({...state, type1: e.target.value})}
                    value={state.type1}
                  >
                    <option value='normal'>Normal</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='steel'>Steel</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='electric'>Electric</option>
                    <option value='psychic'>Psychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dragon'>Dragon</option>
                    <option value='fairy'>Fairy</option>
                    <option value='dark'>Dark</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicType2">
                  <Form.Label>Type 2</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={e => setState({...state, type2: e.target.value})}
                    value={state.type2}
                  >
                    <option value=''>None</option>
                    <option value='normal'>Normal</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='steel'>Steel</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='electric'>Electric</option>
                    <option value='psychic'>Psychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dragon'>Dragon</option>
                    <option value='fairy'>Fairy</option>
                    <option value='dark'>Dark</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicWeather1">
                  <Form.Label>Weather 1</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    onChange={e => setState({...state, weather1: e.target.value})}
                    value={state.weather1}
                  >
                    <option value="Sunny/Clear">Sunny/Clear</option>
                    <option value="Windy">Windy</option>
                    <option value="Partly Cloudy">Partly Cloudy</option>
                    <option value="Cloudy">Cloudy</option>
                    <option value="Rainy">Rainy</option>
                    <option value="Snow">Snow</option>
                    <option value="Fog">Fog</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicWeather2">
                  <Form.Label>Weather 2</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={e => setState({...state, weather2: e.target.value})}
                    value={state.weather2}
                  >
                    <option value="">None</option>
                    <option value="Sunny/Clear">Sunny/Clear</option>
                    <option value="Windy">Windy</option>
                    <option value="Partly Cloudy">Partly Cloudy</option>
                    <option value="Cloudy">Cloudy</option>
                    <option value="Rainy">Rainy</option>
                    <option value="Snow">Snow</option>
                    <option value="Fog">Fog</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group  controlId="formBasicStats">
            <Form.Label>Stats</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control
                required
                placeholder="ATK"
                onChange={e => setState({...state, atk: e.target.value})}
                value={state.atk}
                />
              </Col>
              <Col>
                <Form.Control
                required
                placeholder="DEF"
                onChange={e => setState({...state, def: e.target.value})}
                value={state.def}
                />
              </Col>
              <Col>
                <Form.Control
                required
                placeholder="STA"
                onChange={e => setState({...state, sta: e.target.value})}
                value={state.sta}
                />
              </Col>
            </Form.Row>
            </Form.Group>
        
            <Form.Row>
              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicCrossGen">
                <Form.Label>Cross Gen</Form.Label>
                <br/>
                <div className='d-flex justify-content-center'>
                  <Form.Check
                    required
                    inline
                    label="Yes"
                    name='crossGen'
                    type='radio'
                    checked={state.crossGen}
                    onChange={e => setState({...state, crossGen: true})}
                  />
                  <Form.Check
                    required
                    inline
                    label="No"
                    name='crossGen'
                    type='radio'
                    checked={!state.crossGen}
                    onChange={e => setState({...state, crossGen: false})}
                  />
                </div>
                </Form.Group>
              </Col>

              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicLegendary">
                <Form.Label>Legendary</Form.Label>
                <br/>
                <div className='d-flex justify-content-center'>
                  <Form.Check
                    required
                    inline
                    label="Yes"
                    name='legendary'
                    type='radio'
                    checked={state.legendary}
                    onChange={e => setState({...state, legendary: true})}
                  />
                  <Form.Check
                    required
                    inline
                    label="No"
                    name='legendary'
                    type='radio'
                    checked={!state.legendary}
                    onChange={e => setState({...state, legendary: false})}
                  />
                </div>
                </Form.Group>
              </Col>

              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicSpawns">
                <Form.Label>Spawns</Form.Label>
                <br/>
                <div className='d-flex justify-content-center'>
                  <Form.Check
                    required
                    inline
                    label="Yes"
                    name='spawns'
                    type='radio'
                    checked={state.spawns}
                    onChange={e => setState({...state, spawns: true})}
                  />
                  <Form.Check
                    required
                    inline
                    label="No"
                    name='spawns'
                    type='radio'
                    checked={!state.spawns}
                    onChange={e => setState({...state, spawns: false})}
                  />
                </div>
                </Form.Group>
              </Col>

            </Form.Row>

            <Form.Row>
              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicRegional">
                  <Form.Label>Regional</Form.Label>
                  <br/>
                  <div className='d-flex justify-content-center'>
                    <Form.Check
                      required
                      inline
                      label="Yes"
                      name='regional'
                      type='radio'
                      checked={state.regional}
                      onChange={e => setState({...state, regional: true})}
                    />
                    <Form.Check
                      required
                      inline
                      label="No"
                      name='regional'
                      type='radio'
                      checked={!state.regional}
                      onChange={e => setState({...state, regional: false})}
                      />
                  </div>
                </Form.Group>
              </Col>

              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicShiny">
                  <Form.Label>Shiny</Form.Label>
                  <br/>
                  <div className='d-flex justify-content-center'>
                    <Form.Check
                      required
                      inline
                      label="Yes"
                      name='shiny'
                      type='radio'
                      checked={state.shiny}
                      onChange={e => setState({...state, shiny: true})}
                      />
                    <Form.Check
                      required
                      inline
                      label="No"
                      name='shiny'
                      type='radio'
                      checked={!state.shiny}
                      onChange={e => setState({...state, shiny: false})}
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicNest">
                  <Form.Label>Nest</Form.Label>
                  <br/>
                  <div className='d-flex justify-content-center'>
                    <Form.Check
                      required
                      inline
                      label="Yes"
                      name='nest'
                      type='radio'
                      checked={state.nest}
                      onChange={e => setState({...state, nest: true})}
                      />
                    <Form.Check
                      required
                      inline
                      label="No"
                      value='false'
                      name='nest'
                      type='radio'
                      checked={!state.nest}
                      onChange={e => setState({...state, nest: false})}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicNew">
                  <Form.Label>New</Form.Label>
                  <br/>
                  <div className='d-flex justify-content-center'>
                    <Form.Check
                      required
                      inline
                      label="Yes"
                      name='new'
                      type='radio'
                      checked={state.new}
                      onChange={e => setState({...state, new: true})}
                    />
                    <Form.Check
                      required
                      inline
                      label="No"
                      name='new'
                      type='radio'
                      checked={!state.new}
                      onChange={e => setState({...state, new: false})}
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicNotGettable">
                  <Form.Label>Not Gettable</Form.Label>
                  <br/>
                  <div className='d-flex justify-content-center'>
                    <Form.Check
                      required
                      inline
                      label="Yes"
                      name='notGettable'
                      type='radio'
                      checked={state.notGettable}
                      onChange={e => setState({...state, notGettable: true})}
                    />
                    <Form.Check
                      required
                      inline
                      label="No"
                      value='false'
                      name='notGettable'
                      type='radio'
                      checked={!state.notGettable}
                      onChange={e => setState({...state, notGettable: false})}
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col sm={6} md={4}>
                <Form.Group controlId="formBasicFutureEvolve">
                  <Form.Label>Future Evolve</Form.Label>
                  <br/>
                  <div className='d-flex justify-content-center'>
                    <Form.Check
                      required
                      inline
                      label="Yes"
                      name='futureEvolve'
                      type='radio'
                      checked={state.futureEvolve}
                      onChange={e => setState({...state, futureEvolve: true})}
                    />
                    <Form.Check
                      required
                      inline
                      label="No"
                      name='futureEvolve'
                      type='radio'
                      checked={!state.futureEvolve}
                      onChange={e => setState({...state, futureEvolve: false})}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Form.Group>
              <Form.File
                accept='image/jpeg, image/pjpg, image/png, image/gif'
                id="exampleFormControlFile1"
                label="Pokemon Image"
                required={id}
                onChange={(e)=>setFile(e.target.files[0])}
              />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
  )
}
