import React from 'react'
import { Card } from 'react-bootstrap'

export default function PokeCard({type}) {
    return (
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> Type One</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>ATK: XXX</Card.Text>
                <Card.Text>DFS: XXX</Card.Text>
                <Card.Text>SFX: XXX</Card.Text>
                <Card.Link href="#">Mais Detalhes</Card.Link>
            </Card.Body>
        </Card>
    )
}
