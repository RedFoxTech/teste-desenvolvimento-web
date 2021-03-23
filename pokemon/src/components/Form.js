import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import api from '../services/api'
import './style.css'

function PokeForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);
  const [sta, setSta] = useState(0);
  const [family, setFamily] = useState(0);
  const [stage, setStage] = useState(1);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    await api.post('pokemon', { name, family_id:family, type, atk, def, sta,evolution_stage:stage })
    return alert('pokemon criado')
  }


  return (
    <div class='form'>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Nome</Form.Label>
          <Form.Control size="sm" type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            placeholder="nome do Pokemon" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Evolutio Stage</Form.Label>
          <Form.Control size="sm" as="select"
            value={stage}
            onChange={(e) => { setStage(e.target.value) }}
            custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
           
          </Form.Control>
        </Form.Group>


        <Form.Group>
          <Form.Label>Tipo</Form.Label>
          <Form.Control size="sm" as="select"
            value={type}
            onChange={(e) => { setType(e.target.value) }}
            custom>
            <option>fire</option>
            <option>water</option>
            <option>grass</option>
            <option>bug</option>
            <option>normal</option>
            <option>fighting</option>
            <option>psychic</option>
          </Form.Control>
        </Form.Group>
        <Form.Row>
          <Form.Group md={4}  >
            <Form.Label>Atk</Form.Label>
            <Form.Control size="sm" type="number"
              value={atk}
              onChange={(e) => { setAtk(e.target.value) }}
              placeholder="Atk do Pokemon" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Def</Form.Label>
            <Form.Control size="sm" type="number"
              value={def}
              onChange={(e) => { setDef(e.target.value) }}
              placeholder="Def do Pokemon" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Sta</Form.Label>
            <Form.Control size="sm" type="number"
              value={sta}
              onChange={(e) => { setSta(e.target.value) }}
              placeholder="Sta do Pokemon" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Family</Form.Label>
            <Form.Control size="sm" type="number"
              value={family}
              onChange={(e) => { setFamily(e.target.value) }}
              placeholder="Family do Pokemon" />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default PokeForm