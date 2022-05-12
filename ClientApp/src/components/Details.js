
import Container from 'react-bootstrap/Container';
import './Details.css';
import { Image, Col, Row } from 'react-bootstrap'
import { Axios } from 'axios';
import { useLocation } from 'react-router-dom';


export default function Details() {
    const location = useLocation();
    



    return (
        <>
            <div>Details</div>
            <Container fluid className='container ms-auto me-auto'>
                <Row>
                    <Col md={6} className=' justify-content-center flex'>
                        <Image src={location.state.product.imageSrc}></Image>
                        1 of 2

                    </Col>
                    <Col md={6} className=' justify-content-center flex'>2 of 2</Col>
                </Row>
            </Container>
        </>
    )
}


