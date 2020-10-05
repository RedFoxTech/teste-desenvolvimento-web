import React from "react";
import { Button } from "../ControlPage/style";
import { Link } from "react-router-dom";
export default function Filter() {
  return (
    <div>
      <h1>Filter the pokemon</h1>
      <form>
        <label>Enter the name of the pokemon:</label>
        <input type="text"></input>
        <Button>SEARCH</Button>
      </form>

      <Link to="/">
        <Button>HOME</Button>
      </Link>
    </div>
  );
}
