import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Button, Col, FormControl, Nav, DropdownButton, Dropdown, Navbar} from "react-bootstrap";
import NavbarWeb from "../components/navbar";
import Footer from "../components/footer";
import '../components/item.css';

import axios from "axios";

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
    const [Gettable, setGettable] = useState([]);

    
    const history = useHistory();

    async function add(e){
        e.preventDefault();
        const response = await axios.post("http://localhost:3333/add", {
                "name": Name,
                "pokedexNumber": PokeNumber,
                "type1": Type1.toLowerCase(),
                "type2": Type2.toLowerCase(),
                "weather1": Weather1,
                "weather2": Weather2,
                "atk": Atk,
                "def": Def,
                "sta": Sta,
                "regional": Boolean(Regional),
                "raidable": Boolean(Raidable),
                "hatchable": Hatchable,
                "shiny": Boolean(Shiny),
                "nest": Boolean(Nest),
                "IV40": IV40,
                "IV39": IV39,
                "notGettable": Boolean(Gettable)
            }).then(
                history.push('/')
            );
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
                            <Form.Control type="text" placeholder="Pokemon's name" onChange={(text) => setName(text.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <p>Pokedex number</p>
                            <Form.Control type="number" placeholder="Pokedex number" min="0" onChange={(text) => setPokeNumber(text.target.value)}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridWeather1">
                        <p>Weather 1</p>
                        <Form.Control as="select" defaultValue="Cloudy" onChange={(text) => setWeather1(text.target.value)}>
                            <option>Cloudy</option>
                            <option>Windy</option>
                            <option>Snowy</option>
                            <option>Rainy</option>
                            <option>Partly cloudly</option>
                            <option>Sunny/clear</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridWeather2" onChange={(text) => setWeather2(text.target.value)}>
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
                            <Form.Control as="select" defaultValue="Bug" onChange={(text) => setType1(text.target.value)}>
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
                            <Form.Control as="select" defaultValue="Bug" onChange={(text) => setType2(text.target.value)}>
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
                            <Form.Control as="select" defaultValue="True" onChange={(text) => setShiny(text.target.value)}>
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridRegional">
                            <p>Regional</p>
                            <Form.Control as="select" defaultValue="True" onChange={(text) => setRegional(text.target.value)}>
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <p>Hatchable</p>
                            <Form.Control as="select" defaultValue="True" onChange={(text) => setHatchable(text.target.value)}>
                                <option>2</option>
                                <option>5</option>
                                <option>10</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNest">
                            <p>Nest</p>
                            <Form.Control as="select" defaultValue="True" onChange={(text) => setNest(text.target.value)}>
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridGettable">
                            <p>Gettable</p>
                            <Form.Control as="select" defaultValue="True" onChange={(text) => setGettable(text.target.value)}>
                                <option>True</option>
                                <option>False</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridRaidable">
                            <p>Raidable</p>
                            <Form.Control type="number" min="0" placeholder="Raidable" onChange={(text) => setRaidable(text.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridATK">
                            <p>ATK</p>
                            <Form.Control type="number" min="0" placeholder="ATK" onChange={(text) => setAtk(text.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridDEF">
                            <p>DEF</p>
                            <Form.Control type="number" min="0" placeholder="DEF" onChange={(text) => setDef(text.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridSTA">
                            <p>STA</p>
                            <Form.Control type="number" min="0" placeholder="STA" onChange={(text) => setSta(text.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridIV40">
                            <p>IV40</p>
                            <Form.Control type="number" min="0" placeholder="IV40" onChange={(text) => setIV40(text.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridIV39" onChange={(text) => setIV39(text.target.value)}>
                            <p>IV39</p>
                            <Form.Control type="number" min="0" placeholder="IV39" />
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