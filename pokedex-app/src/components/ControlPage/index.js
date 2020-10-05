import React from "react";
import { Link } from "react-router-dom";
import { Container, Title, Button, Painel } from "./style";

export const ControlPage = () => {
  return (
    <Container>
      <Painel>
        <Title>POKEMON PANEL</Title>
        <div>
          <Link to="/insert">
            <Button>ADD</Button>
          </Link>
          <Link to="/edit">
            <Button>EDIT</Button>
          </Link>
          <Link to="filter">
            <Button>FILTER</Button>
          </Link>
          <Link to="delete">
            <Button>DELETE</Button>
          </Link>
        </div>
      </Painel>
    </Container>
  );
};
