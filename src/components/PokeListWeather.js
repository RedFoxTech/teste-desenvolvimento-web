import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { filterByName } from './API';

export default function PokeListWeather({ match }) {
    const [pageTitle, setPageTitle] = useState("...")
    const [renderDetails, setRenderDetails] = useState([])

    useEffect(() => {
        const { params } = match;
        setPageTitle(params.id)
        getPokesByName(params.id)

    }, [])

    function getPokesByName(pgt) {
        filterByName(pgt)
            .then(res => {
                return setRenderDetails(res[0])
            })
    }

    return (
        <Container className="bg-warning" fluid="xs" >
            <Row className="p-2 m-0" >
                <Col>
                    <Card>
                        <Card.Title>{pageTitle} </Card.Title>
                        <Card.Body>
                            <Card.Text>PokeNum: {renderDetails.pokeNum}</Card.Text>
                            <Card.Text>Generation: {renderDetails.Generation} </Card.Text>
                            <Card.Text>Tipo 1: {renderDetails.typeOne}</Card.Text>
                            <Card.Text>ATK: {renderDetails.ATK}</Card.Text>
                            <Card.Text>DEF: {renderDetails.DEF}</Card.Text>
                            <Card.Text>STA: {renderDetails.STA}</Card.Text>
                            <Card.Text>Status Total: {renderDetails.statTotal}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

