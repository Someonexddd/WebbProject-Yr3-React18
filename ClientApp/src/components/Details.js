
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Details({ productId }) {





    return (
        <>
            <div>Details</div>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        1 of 2

                    </Col>
                    <Col md={6}>2 of 2</Col>
                </Row>
            </Container>
        </>
    )
}


