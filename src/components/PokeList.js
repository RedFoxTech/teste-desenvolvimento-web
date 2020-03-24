import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PokeCard from './PokeCard'

export default function PokeList({ data }) {

    return (
        <Container className="bg-warning" fluid="xs" style={{ height: '90vh' }}>
            <Row className="p-2 m-0">
                <Row className="p-5 flex-row justify-content-center" lg={5}>

                    {data.length == 0 ? "Nada a exibir" : data[0].map((item, index) => {
                        return <PokeCard item={item} />
                    })}

                </Row>
            </Row>
        </Container>
    )
}