import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import elemental from '../assets/images/hero/elemental.jpeg'
import hidden from '../assets/images/hero/hidden.jpeg'
import joker from '../assets/images/hero/joker.jpeg'
import steve from '../assets/images/hero/steve.jpeg'

function Superhero() {
    return (
        <div>
            <Container>
                <div className='text-white pt-4 text-center title' id='superhero'>
                    <h1>SUPERHERO PAGES</h1>
                </div>
                <Row>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={elemental} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={hidden} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={joker} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={steve} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    {/* baris 2 */}
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={joker} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={hidden} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={steve} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={elemental} alt="cargo image" className='movieImage' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white' >
                                    <Card.Title className='text-center '>CARGO</Card.Title>
                                    <Card.Text className='text-center '>
                                        This is a wider card with supporting text below as a natural lead-in
                                    </Card.Text>
                                    <Card.Text className='text-center '>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero 