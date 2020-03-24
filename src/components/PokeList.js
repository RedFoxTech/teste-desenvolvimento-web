import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import PokeCard from './PokeCard'

export default function PokeList({ typeOne, ATK, DFS, SFX }) {
    return (
        <Container className="bg-warning" fluid="xs" style={{ height: '90vh' }}>
            <Row className="p-2 m-0">
                <Col>
                    <PokeCard />
                </Col>
            </Row>
        </Container>
    )
}
