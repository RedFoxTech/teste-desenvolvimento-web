import React from 'react';
import { Button, Modal, InputGroup, FormControl, Form, Row, Container, Col } from 'react-bootstrap';

const modalAddPokemon = (props) => {
  return (
    <div className="ModalAddPokemon">
      <Button variant="primary" className="float-right" onClick={props.onClickShow}>Adicionar</Button>

      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Pokemon</Modal.Title>
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
                    <FormControl onChange={props.onChange} name="name"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Pokedex Number</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="pokedex_number" type="number" min="0"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Img Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="img_name"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Generation</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="generation" type="number" min="0"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Evolution Stage</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="evolution_stage"></FormControl>
                  </InputGroup>

                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Evolved</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="evolved" type="number" min="0"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Family ID</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="family_id"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Cross Gen</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cross_gen" type="number" min="0"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Type 1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="type_1"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Type 2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="type_2"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Weather 1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="weather_1"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Weather 2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="weather_2"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Stat Total</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="stat_total" type="number" min="0"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Atk</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="atk" type="number" min="0"></FormControl>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Def</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="def" type="number" min="0"></FormControl>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Sta</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="sta" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Legendary</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="legendary" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Aquireable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="aquireable" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Spawns</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="spawns" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Regional</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="regional" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Raidable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="raidable" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Hatchable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="hatchable" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Shiny</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="shiny" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Nest</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="nest" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>New</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="new" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Non Gettable</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="non_gettable" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Future Evolve</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="future_evolve" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>CP 40</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cp40" type="number" min="0"></FormControl>
                  </InputGroup><InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>CP 39</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={props.onChange} name="cp39" type="number" min="0"></FormControl>
                  </InputGroup>

                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
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

export default modalAddPokemon;