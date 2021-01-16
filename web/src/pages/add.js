import React, {useEffect, useState} from 'react';
import {Form, Button, Col, FormControl, Nav, DropdownButton, Dropdown, Navbar} from "react-bootstrap";
import NavbarWeb from "../components/navbar";
import Footer from "../components/footer";
import '../components/item.css';

import axios from "axios";
import Search from "../assets/icons/search.svg";

export default function Add (){
    const [Name, setName] = useState([]);
    const [PokeNumber, setPokeNumber] = useState([]);
    const [Type1, setType1] = useState([]);
    const [Type2, setType2] = useState([]);
    const [Weather1, setWeather1] = useState([]);
    const [Weather2, setWeather2] = useState([]);
    const [Atk, setAtk] = useState([]);
    const [Def, setDef] = useState([]);
    const [Sta, setSta] = useState([]);
    const [Regional, setRegional] = useState([]);
    const [Raidable, setRaidable] = useState([]);
    const [Hatchable, setHatchable] = useState([]);
    const [Shiny, setShiny] = useState([]);
    const [Nest, setNest] = useState([]);
    const [IV40, setIV40] = useState([]);
    const [IV39, setIV39] = useState([]);

    async function add(e){
        e.preventDefault();

        return false;
    }
    return(
        <>
            <NavbarWeb/>
            <div className={"container infos info-grass w-100 h-100 b-25 p-5"}>
                <Form onSubmit={e => add(e)}>
                    <h6>Add a Pokemon!</h6>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <p>Name</p>
                            <Form.Control type="text" placeholder="Pokemon's name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <p>Pokedex number</p>
                            <Form.Control type="number" placeholder="Pokedex number" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridWeather1">
                        <p>Weather 1</p>
                        <Form.Control as="select" defaultValue="Cloudy">
                            <option>Cloudy</option>
                            <option>Windy</option>
                            <option>Snowy</option>
                            <option>Rainy</option>
                            <option>Partly cloudly</option>
                            <option>Sunny/clear</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridWeather2">
                            <p>Weather 2</p>
                            <Form.Control as="select" defaultValue="Cloudy">
                                <option>Cloudy</option>
                                <option>Windy</option>
                                <option>Snowy</option>
                                <option>Rainy</option>
                                <option>Partly cloudly</option>
                                <option>Sunny/clear</option>
                        </Form.Control>
                    </Form.Group>
                        <Form.Group as={Col} controlId="formGridType1">
                            <p>Type 1</p>
                            <Form.Control as="select" defaultValue="Bug">
                                <option>Bug</option>
                                <option>Dark</option>
                                <option>Dragon</option>
                                <option>Electric</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Fire</option>
                                <option>Flying</option>
                                <option>Ghost</option>
                                <option>Grass</option>
                                <option>Ground</option>
                                <option>Ice</option>
                                <option>Normal</option>
                                <option>Poison</option>
                                <option>Psychic</option>
                                <option>Rock</option>
                                <option>Steel</option>
                                <option>Water</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridType2">
                            <p>Type 2</p>
                            <Form.Control as="select" defaultValue="Bug">
                                <option>Bug</option>
                                <option>Dark</option>
                                <option>Dragon</option>
                                <option>Electric</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Fire</option>
                                <option>Flying</option>
                                <option>Ghost</option>
                                <option>Grass</option>
                                <option>Ground</option>
                                <option>Ice</option>
                                <option>Normal</option>
                                <option>Poison</option>
                                <option>Psychic</option>
                                <option>Rock</option>
                                <option>Steel</option>
                                <option>Water</option>
                                <option>No option</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridShiny">
                            <p>Shiny</p>
                            <Form.Control as="select" defaultValue="True">
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridRegional">
                            <p>Regional</p>
                            <Form.Control as="select" defaultValue="True">
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <p>Hatchable</p>
                            <Form.Control as="select" defaultValue="True">
                                <option>2</option>
                                <option>5</option>
                                <option>10</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNest">
                            <p>Nest</p>
                            <Form.Control as="select" defaultValue="True">
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridGettable">
                            <p>Gettable</p>
                            <Form.Control as="select" defaultValue="True">
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridRaidable">
                            <p>Raidable</p>
                            <Form.Control type="number" placeholder="Raidable" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridATK">
                            <p>ATK</p>
                            <Form.Control type="number" placeholder="ATK" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridDEF">
                            <p>DEF</p>
                            <Form.Control type="number" placeholder="DEF" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridSTA">
                            <p>STA</p>
                            <Form.Control type="number" placeholder="Raidable" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridIV40">
                            <p>IV40</p>
                            <Form.Control type="number" placeholder="IV40" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridIV39">
                            <p>IV39</p>
                            <Form.Control type="number" placeholder="IV39" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" onSubmit={e => add(e)}>
                        Submit
                    </Button>
                </Form>
            </div>
            <Footer/>
        </>
    )
}