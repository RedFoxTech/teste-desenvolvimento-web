import { Card, Modal, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom';





function Cards({image, name, description, id, type}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
        <Card onClick={handleShow} className="my-1 p-1" style={{minHeight: '25rem', minWidth: '12rem'}}>
            <Card.Img src={image} variant="top"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
        
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered >

        <Modal.Header closeButton>
            <Container>
                <Modal.Title style={{fontSize: '25px', }} >{name}</Modal.Title>
                <Card.Link style={{fontSize: '17px'}} >Type: {type}</Card.Link>
            </Container>
        </Modal.Header>
        <Modal.Body>
            <Card.Img src={image} variant="top"/>
            <Card.Text style={{fontSize: '18px', textAlign: "center", marginTop: '40px'}} >{description}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => {
                axios.delete(`https://apitestepoke.herokuapp.com/pokemon/${id}`).then(() => window.location.href = "/")
            }} variant="danger">Excluir</Button>
            <Link to={`/edit/${id}`}> 
                <Button variant="warning">Editar</Button>
            </Link>
        </Modal.Footer>
        </Modal>
        </>
    )
}


export default Cards