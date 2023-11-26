import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar variant='dark'>
                <Container className='textNav'>
                    <Navbar.Brand className='textNav' href='/'>RIFKIFILM</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='#trending'>TRENDING</Nav.Link>
                        <Nav.Link href='#superhero'>SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar