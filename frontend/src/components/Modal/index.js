import React from 'react'
import {Modal, Row, Table, Col} from 'react-bootstrap'

export default function ModalComponent({showPokemon, changeShowPokemon}) {
  return (
    <Modal
    show={showPokemon? true:false}
    onHide={()=>changeShowPokemon(false)}
    animation={false}
    size="lg"
    aria-labelledby="example-custom-modal-styling-title"
    scrollable
  >
    <Modal.Header closeButton>
      <Modal.Title id="PokemonModal">
        {showPokemon.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <img className='pokemon__img m-auto' src={showPokemon.imgUrl} alt={showPokemon.name}></img>
      </Row>
      <Row className='justify-content-center align-items-center'>
          <Col>
            <h2 className='text-center'>{showPokemon && showPokemon.pokedexNumber.toString().padStart(3, "0")+" - "+showPokemon.name}</h2>
          </Col>
        </Row>
      <Row>
        <Table responsive>
        <thead className="text-center">
          <tr>
            <th>Status</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>Generation</td>
            <td>{showPokemon.generation}</td>
          </tr>
          <tr>
            <td>Evolution Stage</td>
            <td>{showPokemon.evolutionStage}</td>
          </tr>
          <tr>
            <td>Evolved</td>
            <td>{showPokemon.evolved ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Family Id</td>
            <td>{showPokemon.familyId}</td>
          </tr>
          <tr>
            <td>Cross Gen</td>
            <td>{showPokemon.crossGen ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Type 1</td>
            <td>{showPokemon.type1}</td>
          </tr>
          <tr>
            <td>Type 2</td>
            <td>{showPokemon.type2 ? showPokemon.type2 : "Don't Have"}</td>
          </tr>
          <tr>
            <td>Weather 1</td>
            <td>{showPokemon.weather1}</td>
          </tr>
          <tr>
            <td>Weather 2</td>
            <td>{showPokemon.weather2 ? showPokemon.type2 : "Don't Have"}</td>
          </tr>
          <tr>
            <td>ATK</td>
            <td>{parseInt(showPokemon.atk)}</td>
          </tr>
          <tr>
            <td>DEF</td>
            <td>{parseInt(showPokemon.def)}</td>
          </tr>
          <tr>
            <td>STA</td>
            <td>{parseInt(showPokemon.sta)}</td>
          </tr>
          <tr>
            <td>Total Status</td>
            <td>{parseInt(showPokemon.statTotal)}</td>
          </tr>
          <tr>
            <td>Raidable</td>
            <td>{parseInt(showPokemon.raidable)}</td>
          </tr>
          <tr>
            <td>Hatchable</td>
            <td>{parseInt(showPokemon.hatchable)}</td>
          </tr>
          <tr>
            <td>Aquireable</td>
            <td>{parseInt(showPokemon.aquireable)}</td>
          </tr>
          <tr>
            <td>LVL 40 100%CP</td>
            <td>{parseInt(showPokemon.cp_100_lvl40)}</td>
          </tr>
          <tr>
            <td>LVL 39 100%CP</td>
            <td>{parseInt(showPokemon.cp_100_lvl39)}</td>
          </tr>
          <tr>
            <td>Legendary</td>
            <td>{showPokemon.legendary ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Spawns</td>
            <td>{showPokemon.spawns ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Regional</td>
            <td>{showPokemon.regional ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Shiny</td>
            <td>{showPokemon.shiny ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Nest</td>
            <td>{showPokemon.nest ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>New</td>
            <td>{showPokemon.new ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Not Gettable</td>
            <td>{showPokemon.notGettable ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Future Evolve</td>
            <td>{showPokemon.futureEvolve ? "Yes" : "No"}</td>
          </tr>
        </tbody>
        </Table>
      </Row>
    </Modal.Body>
  </Modal>
  )
}
