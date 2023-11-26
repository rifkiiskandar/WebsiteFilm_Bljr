import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import cargo from '../assets/images/tranding/cargo.jpeg'
import comeback from '../assets/images/tranding/comeback.jpeg'
import sas from '../assets/images/tranding/sas.jpeg'
import nitram from '../assets/images/tranding/nitram.jpeg'

function Trending() {
    return (
        <div>
            <Container>
                <div className='text-white pt-4 text-center title' id='trending'>
                    <h1>TRENDING PAGES</h1>
                </div>
                <Row>
                    <Col md={3} className='movieWraper'>
                        <Card className="movieImage bg-dark">
                            <Image src={cargo} alt="cargo image" className='movieImage' />
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
                            <Image src={sas} alt="cargo image" className='movieImage' />
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
                            <Image src={comeback} alt="cargo image" className='movieImage' />
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
                            <Image src={nitram} alt="cargo image" className='movieImage' />
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
                            <Image src={nitram} alt="cargo image" className='movieImage' />
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
                            <Image src={comeback} alt="cargo image" className='movieImage' />
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
                            <Image src={cargo} alt="cargo image" className='movieImage' />
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
                            <Image src={sas} alt="cargo image" className='movieImage' />
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

export default Trending