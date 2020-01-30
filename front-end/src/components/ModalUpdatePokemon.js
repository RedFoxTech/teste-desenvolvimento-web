import React from 'react';
import { Button, Modal, InputGroup, FormControl, Form, Row, Container, Col } from 'react-bootstrap';

const modalUpdatePokemon = (props) => {
  return (
    <div className="ModalUpdatePokemon">

      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Atualizar Pokemon</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="nameU" value={props.name}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Pokedex Number</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="pokedex_numberU" type="number" min="0" value={props.pokedexNum}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Img Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="img_nameU" value={props.imgName}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Generation</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="generationU" type="number" min="0" value={props.generation}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Evolution Stage</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="evolution_stageU" value={props.evolutionStage}></FormControl>
                  </InputGroup>

                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Evolved</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="evolvedU" type="number" min="0" value={props.evolved}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Family ID</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="family_idU" value={props.familyId}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Cross Gen</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cross_genU" type="number" min="0" value={props.crossGen}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Type 1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="type_1U" value={props.type1}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Type 2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="type_2U" value={props.type2}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Weather 1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="weather_1U" value={props.weather1}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Weather 2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="weather_2U" value={props.weather2}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Stat Total</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="stat_totalU" type="number" min="0" value={props.statTotal}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Atk</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="atkU" type="number" min="0" value={props.atk}></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Def</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="defU" type="number" min="0" value={props.def}></FormControl>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Sta</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="staU" type="number" min="0" value={props.sta}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Legendary</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="legendaryU" type="number" min="0" value={props.legendary}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Aquireable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="aquireableU" type="number" min="0" value={props.aquireable}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Spawns</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="spawnsU" type="number" min="0" value={props.spawns}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Regional</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="regionalU" type="number" min="0" value={props.regional}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Raidable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="raidableU" type="number" min="0" value={props.raidable}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Hatchable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="hatchableU" type="number" min="0" value={props.hatchable}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Shiny</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="shinyU" type="number" min="0" value={props.shiny}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Nest</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="nestU" type="number" min="0" value={props.nest}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>New</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="newU" type="number" min="0" value={props.new}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Non Gettable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="non_gettableU" type="number" min="0" value={props.nonGettable}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Future Evolve</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="future_evolveU" type="number" min="0" value={props.futureEvolve}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>CP 40</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cp40U" type="number" min="0" value={props.cp40}></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>CP 39</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cp39U" type="number" min="0" value={props.cp39}></FormControl>
                  </InputGroup>

                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" className="mr-auto" onClick={props.onClickDelete}>
              Excluir
          </Button>
            <Button variant="secondary" onClick={props.onClickClose}>
              Fechar
          </Button>
            <Button variant="primary" type="submit" onClick={props.onClickSave}>
              Salvar
          </Button>

          </Modal.Footer>
        </Form>
      </Modal>
    </div >
  )
};

export default modalUpdatePokemon;