import {Navbar,Container, Nav} from 'react-bootstrap'

import { Link } from 'react-router-dom'

function Header({logo, item, link}) {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>{logo}</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link style={{color: '#fff', textDecoration: 'none', fontFamily: "Nunito Sans"}} to={link}>{item}</Link>
                </Nav>
            </Container>
        </Navbar>
        
    )
}


export default Header