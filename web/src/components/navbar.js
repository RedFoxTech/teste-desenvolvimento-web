import Pokeball from '../assets/patterns/pokeball.svg';
import { Navbar, Form, Button, FormControl, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Search from '../assets/icons/search.svg';
import { useHistory } from 'react-router-dom';
import Filter from '../assets/icons/filter.svg';
import Add from '../assets/icons/add_box.svg';
import './navbar.css';
import axios from "axios";
import {useState} from "react";

function NavbarWeb() {
    const [Nome, setNome] = useState("");
    const history = useHistory();

    async function filter(e){
        e.preventDefault();
        window.Nome = Nome;
        console.log(Nome);
        return false;
    }

    return(
        <>
        <Navbar bg="white" variant="light">
            <Navbar.Brand href="/">
                <img
                    src={Pokeball}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Pokeball"
                />
                <h5 className="d-inline-block"> Pokedéx </h5>
            </Navbar.Brand>
            <Nav className="mr-auto"/>
            <Form inline className="align-left" onSubmit={e => filter(e)}>
                <FormControl placeholder='Pesquise um pokémon' className="mr-sm-2" onChange={e => setNome(e.target.value)}/>
                <Button className="btn-nav" type="submit">
                    <img src={Search} alt="Search" width="18.22" height="18.22"/>
                </Button>
            </Form>
            <Button className="btn-nav" onClick={() => history.push('/add')}>
                <img src={Add} alt="Add pokémon button" width="18.22" height="18.22"/>
            </Button>
        </Navbar>
        </>
)}

export default NavbarWeb;