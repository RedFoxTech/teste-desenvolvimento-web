import {Navbar,Container, Nav} from 'react-bootstrap'

import { Link } from 'react-router-dom'

function Header({item, icon, link}) {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/"> <Navbar.Brand>Pokedex</Navbar.Brand></Link>
                {icon}
                <Nav className="ml-auto">
                    <Link style={{color: '#fff', textDecoration: 'none', fontFamily: "Nunito Sans"}} to={link}>{item}</Link>
                </Nav>
            </Container>
        </Navbar>
        
    )
}


export default Header