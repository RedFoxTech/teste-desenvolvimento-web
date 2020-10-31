import { Card, Modal, Button } from 'react-bootstrap'

import { useState } from 'react'
import { Link } from 'react-router-dom';

function Cards({image, name, description, id}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Card onClick={handleShow} className="my-3 p-3" style={{minHeight: '26rem'}}>
            <Card.Img src={image} variant="top"/>

            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
        
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>

        <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card.Img src={image} variant="top"/>
            <Card.Text>{description}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger">Excluir</Button>
            <Link to={`/edit/${id}`}> 
                <Button variant="warning">Editar</Button>
            </Link>
        </Modal.Footer>
        </Modal>
        </>
    )
}


export default Cards