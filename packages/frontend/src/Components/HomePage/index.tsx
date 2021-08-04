import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import classNames from "classnames";
import {
    pokemonCard,
    pokemonCardImage,
    pokemonContainer,
} from '@styles/Components/homePage.module.scss';

class HomePage extends React.PureComponent<null, null> {

    render(): React.ReactNode {
        console.log("HomePage render");
        return (
            <main className={classNames(["container", "bg-light", pokemonContainer])} >
                <Card className={pokemonCard} style={{ width: '18rem' }}>
                    <Card.Img className={pokemonCardImage} variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card&apos;s content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </main>
        );
    }
}

export default HomePage;
