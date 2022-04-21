import {Navbar,Nav,Container} from "react-bootstrap"
import { Outlet,Link } from "react-router-dom"


const NavPeliculas = () => {
    return(
        <>
        <Navbar bg="dark" variant="pills" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                    src="/popcorn.png"
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="popcorn-time"
                    />  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/ultimas">Ultimos Lanzamiento</Nav.Link>
                    <Nav.Link as={Link} to="/populares">Populares</Nav.Link>
                    <Nav.Link as={Link} to="/buscar" >Buscar</Nav.Link>
                   
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>



    )
}


export default NavPeliculas