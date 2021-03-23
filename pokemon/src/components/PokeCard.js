import React from 'react'
import {Card} from 'react-bootstrap'


export default props =>{
  return (
    <Card
    bg={props.bg}
    key={props.id}
    style={{ width: '28rem',margin:'20px' }}
    className="mb-2"
  >
    <Card.Header>{props.name}</Card.Header>
    <Card.Body>
      <Card.Text>
       Type: {props.type}
      </Card.Text>
      <Card.Text>
       Atk: {props.atk}
      </Card.Text>
      <Card.Text>
       Def: {props.def}
      </Card.Text>
      <Card.Text>
       Sta: {props.sta}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}