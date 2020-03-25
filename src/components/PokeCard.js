import React from 'react'
import { Card } from 'react-bootstrap'

export default function PokeCard({pokemonCard}) {

    return (
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> {pokemonCard.Name}</Card.Title>
                <Card.Text>ATK: {pokemonCard.ATK}</Card.Text>
                <Card.Text>DEF: {pokemonCard.DEF}</Card.Text>
                <Card.Text>STA: {pokemonCard.STA}</Card.Text>
                <Card.Link className="btn btn-danger" href={`/pokemon/${pokemonCard.Name}`}>Mais Detalhes</Card.Link>
            </Card.Body>
        </Card>
    )
}
