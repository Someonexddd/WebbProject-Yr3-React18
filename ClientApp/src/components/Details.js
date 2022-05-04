import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productAPI from './ProductList';
import { useLocation } from 'react-router-dom';


export default function Details({ productId }) {


    const [ProductConst, setProductConst] = useState([])


    let location = useLocation();

    let result;

    productAPI().fetchById(location.state)
        .then(res => {
            console.log(res.data);
            result = res.data;
        })
        .catch(err => console.log(err))



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


