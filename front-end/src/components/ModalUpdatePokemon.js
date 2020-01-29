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
                    <FormControl onChange={props.onChange} name="nameU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Pokedex Number</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="pokedex_numberU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Img Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="img_nameU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Generation</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="generationU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Evolution Stage</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="evolution_stageU"></FormControl>
                  </InputGroup>

                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Evolved</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="evolvedU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Family ID</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="family_idU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Cross Gen</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cross_genU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Type 1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="type_1U"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Type 2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="type_2U"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Weather 1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="weather_1U"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Weather 2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="weather_2U"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Stat Total</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="stat_totalU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Atk</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="atkU"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Def</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="defU"></FormControl>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Sta</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="staU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Legendary</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="legendaryU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Aquireable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="aquireableU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Spawns</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="spawnsU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Regional</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="regionalU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Raidable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="raidableU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Hatchable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="hatchableU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Shiny</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="shinyU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Nest</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="nestU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>New</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="newU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Non Gettable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="non_gettableU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Future Evolve</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="future_evolveU"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>CP 40</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cp40U"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>CP 39</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cp39U"></FormControl>
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