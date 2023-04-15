import { useApi } from "../../providers/api";
import * as Styles from "./styles";
import * as BsIcons from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Cards = () => {
  const { pokemonsData } = useApi();

  return (
    <Container fluid="md">
      <Row xs={1} md={2} lg={3} className="g-4">
        {pokemonsData
          ? pokemonsData.map((item, index) => (
              <Col key={index}>
                <Card>
                  <Styles.CardHeader>
                    <Styles.TitleBox>{item.name}</Styles.TitleBox>
                    <Styles.ExcludeBox>
                      <BsIcons.BsTrash3Fill />
                    </Styles.ExcludeBox>
                  </Styles.CardHeader>

                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Pokedex Number: {item.pokedexNumber}
                      </ListGroup.Item>
                      <ListGroup.Item>Type1: {item.type1}</ListGroup.Item>
                      <ListGroup.Item>Type2: {item.type2}</ListGroup.Item>
                      <ListGroup.Item>Weather: {item.weather1}</ListGroup.Item>
                      <ListGroup.Item>ATK: {item.atk}</ListGroup.Item>
                      <ListGroup.Item>DEF: {item.def}</ListGroup.Item>
                      <ListGroup.Item>STA: {item.sta}</ListGroup.Item>
                      <ListGroup.Item>
                        Stat Total: {item.statTotal}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};
export default Cards;
