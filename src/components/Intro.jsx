import { Col, Container, Row, Button } from 'react-bootstrap';

function Intro() {
    return (
        <div className="intro">
            <Container className="text-white d-flex justify-content-center align-item-center">
                <Row>
                    <Col>
                        <div className="title">NONTON GRATIS <br />TAPI HARUS NANGIS</div>
                        <div className="introButton text-center mt-2">
                            <Button>LIHAT SEMUA LIST</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro