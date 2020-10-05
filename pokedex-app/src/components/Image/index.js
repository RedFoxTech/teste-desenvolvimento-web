import React from "react";
import { Container } from "./style";
import { Imagem } from "./style";

const Image = () => {
  return (
    <Container>
      <img src={require("./pokemon3.jpg")} />
    </Container>
  );
};

export default Image;
