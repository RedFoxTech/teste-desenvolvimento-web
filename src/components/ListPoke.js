import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function ListPoke({ title, filterTypes }) {
    return (
        <ListGroup>
            <ListGroup.Item onClick={() => {
                filterTypes(title)
            }}>{title}</ListGroup.Item>
        </ListGroup>
    )
}
