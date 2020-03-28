import React, { useEffect } from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import ListPoke from './ListPoke'
import PokeCard from './PokeCard'

export default function PokeList({ data, functionFilter, filterTypes, pokemons }) {
    useEffect(() => {
        functionFilter()
    }, [])

    return (
            <Container className="bg-warning" fluid="xs" >
                <Row className="p-2 m-0" >
                   
                    <Col xl={2}>
                        {data.length == 0 ? "Carregando..." : data.map((item, index) => {
                        return <ListPoke filterTypes={filterTypes} title={item} key={index} />
                    })}
                    </Col>

                        <Col className="d-flex flex-wrap">
                            {pokemons.length == 0 ? "Selecione alguma categoria" : pokemons.map((item, index) => {
                                return <PokeCard pokemonCard={item} key={index} />
                            })}
                        </Col>
                </Row>
            </Container>
    )
}

