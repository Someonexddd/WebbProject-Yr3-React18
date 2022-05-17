import { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap"
import '../App.css';
import { useLocation } from "react-router";
import axios from "axios";

export default function Products() {

    const [ProductList, setProductList] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    let location = useLocation();
    let search = location.search;
    

    useEffect(() => {
        refreshProductList();
        filterSearch();
        console.log(filteredResults)
        // eslint-disable-next-line
    }, [])

    function refreshProductList() {

        productAPI().fetchAll()
            .then(res => {
                console.log(res.data);
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }

    const productAPI = (url = 'http://localhost:5000/api/ProductModels') => {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }


    function filterSearch ()  {
        const filteredList = ProductList.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
        })
        setFilteredResults(filteredList)
        
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
                                    <th>ProductDate</th>
                                    <th>Name on Card</th>
                                    <th>Cardnumber</th>
                                    <th>Card CCV</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredResults.map((Product) => {
                                    return (
                                        <tr key={Product.ProductId}>
                                            <td>{Product.name}</td>
                                            <td>{Product.adress}</td>
                                            <td>{Product.postNum}</td>
                                            <td>{Product.country}</td>
                                            <td>{Product.ProductDate}</td>
                                            <td>{Product.cardName}</td>
                                            <td>{Product.cardNum}</td>
                                            <td>{Product.cardCCV}</td>
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
