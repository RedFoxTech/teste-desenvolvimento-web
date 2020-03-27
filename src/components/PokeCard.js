import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PokeCard({pokemonCard}) {

    return (
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> {pokemonCard.Name}</Card.Title>
                <Card.Text>ATK: {pokemonCard.ATK}</Card.Text>
                <Card.Text>DEF: {pokemonCard.DEF}</Card.Text>
                <Card.Text>STA: {pokemonCard.STA}</Card.Text>
                <Link className="btn btn-danger" to={`/pokemon/${pokemonCard.Name}`}>Mais Detalhes</Link>
            </Card.Body>
        </Card>
    )
}
