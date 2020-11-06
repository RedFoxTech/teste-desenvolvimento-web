import React from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import '../styles/pages/home.css'
import teste from '../images/pokemons.png'
import Sidebar from '../components/Sidebar'

function Home(){
    return(
        <div className="page-home">
           <Sidebar/>

            <div className="page-content">
            <Form.Control type="text" placeholder="Buscar pokemon" />

            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={teste} />
              <Card.Body>
                <Card.Title>Bulbasaur</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button variant="warning">Detalhes</Button>
             </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={teste} />
              <Card.Body>
                <Card.Title>Bulbasaur</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button variant="warning">Detalhes</Button>
             </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={teste} />
              <Card.Body>
                <Card.Title>Bulbasaur</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button variant="warning">Detalhes</Button>
             </Card.Body>
            </Card>
           

            </div>
        </div>
    )
}

export default Home