import { Card } from 'react-bootstrap'

function Cards({image, name, description}) {
    return(
        <Card className="my-3 p-3" style={{minHeight: '26rem'}}>
            <Card.Img src={image} variant="top"/>

            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>

        </Card>

        
    )
}


export default Cards