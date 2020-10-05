import React from "react";
import { Header } from "./style";
import { Image } from "./style";

export default function Title() {
  return (
    <div>
      <Header>
        <Image src={require("./pokemon1.jpg")} />
        POKEDEX
      </Header>
    </div>
  );
}
