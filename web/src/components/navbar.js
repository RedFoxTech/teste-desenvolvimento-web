import Pokeball from '../assets/patterns/pokeball.svg';
import { Navbar, Form, Button, FormControl, Nav } from "react-bootstrap";
import Search from '../assets/icons/search.svg';
import Filter from '../assets/icons/filter.svg';
import Add from '../assets/icons/add_box.svg';
import './navbar.css';

function NavbarWeb() {
    return(
        <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
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
            <Form inline className="align-left">
                <FormControl type="text" placeholder='Pesquise um pokémon' className="mr-sm-2" />
                <Button className="btn-nav">
                    <img src={Search} alt="Search button" width="18.22" height="18.22"/>
                </Button>
                <Button className="btn-nav">
                    <img src={Filter} alt="Search button" width="18.22" height="18.22"/>
                </Button>
                <Button className="btn-nav">
                <img src={Add} alt="Search button" width="18.22" height="18.22"/>
                </Button>
            </Form>
        </Navbar>
        </>
)}

export default NavbarWeb;