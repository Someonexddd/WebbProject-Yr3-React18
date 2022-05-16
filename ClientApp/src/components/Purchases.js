import { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap"
import '../App.css';
import axios from "axios";

export default function Purchases() {

    const [PurchaseList, setPurchaseList] = useState([]);

    useEffect(() => {
        refreshPurchaseList();
        // eslint-disable-next-line
    }, [])

    function refreshPurchaseList() {

        purchaseAPI().fetchAll()
            .then(res => {
                console.log(res.data);
                setPurchaseList(res.data)
            })
            .catch(err => console.log(err))
    }

    const purchaseAPI = (url = 'http://localhost:5000/api/PurchaseModels') => {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }
    return (
        <>
            <Container className="container-body">
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Adress</th>
                                    <th>Post Number</th>
                                    <th>Country</th>
                                    <th>PurchaseDate</th>
                                    <th>Name on Card</th>
                                    <th>Cardnumber</th>
                                    <th>Card CCV</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PurchaseList.map((purchase) => {
                                    return (
                                        <tr key={purchase.purchaseId}>
                                            <td>{purchase.name}</td>
                                            <td>{purchase.adress}</td>
                                            <td>{purchase.postNum}</td>
                                            <td>{purchase.country}</td>
                                            <td>{purchase.purchaseDate}</td>
                                            <td>{purchase.cardName}</td>
                                            <td>{purchase.cardNum}</td>
                                            <td>{purchase.cardCCV}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
