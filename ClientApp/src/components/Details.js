import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './Details.css';
import { Image, Col, Row, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


export default function Details() {


    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();
    let format = location.state.format;
    let UnitsInStock = location.state.unitsInStock;

    const renderTooltip = props => (
        <Tooltip {...props}>{location.state.unitsInStock} in stock!</Tooltip>
    )
    const productAPI = (url = 'http://localhost:5000/api/ProductModels/') => {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }


    useEffect(() => {
        if (format === "CD" || format === "LP" || format === "Cassette") {
            document.getElementById("format-box").classList.add("format-box-" + format);
            document.getElementById("format-box").style.backgroundColor = "green";
            document.getElementById("format-box").innerHTML = location.state.format;
        }
        else {
            document.getElementById("format-box").style.backgroundColor = "orange";
            document.getElementById("format-box").innerHTML = "No Format Entered";
        }
        if (UnitsInStock > 0) {
            document.getElementById("in-stock").style.backgroundColor = "lightgreen";
            document.getElementById("in-stock-text").innerHTML = "IN STOCK"
        }
        if (UnitsInStock <= 0) {
            document.getElementById("in-stock").style.backgroundColor = "darkred";
            document.getElementById("in-stock-text").innerHTML = "OUT OF STOCK"
        }
        // eslint-disable-next-line
    }, [])

    const Authenticated = useAuth0().isAuthenticated;
    const Loading = useAuth0().isLoading;

    const editButton = () => {
        if (Loading === true && Authenticated === false) {
            return (
                <div className='col-sm-6'>
                    <p>Loading</p>
                </div>
            )
        }
        if (Authenticated === true && Loading === false) {
            return (

                <Button className="btn-colors" style={{ marginTop: "10px" }} state={state} variant="primary" as={Link} to={
                    {
                        pathname: '/EditPage',
                    }
                }>Details</Button>

            )
        }
        if (Authenticated === false && Loading === false) {
            return (
                null
            )
        }
    }

    var d = location.state.releaseYear;
    d = d.split('T')[0];

    const purchaseHandler = e => {
        e.preventDefault()
        let currentStock = location.state.unitsInStock;
        currentStock = currentStock - 1;
        let currentSold = location.state.unitsSold;
        currentSold = currentSold + 1;

        const formData = new FormData();
        formData.append('ProductId', location.state.productId)
        formData.append('Name', location.state.name)
        formData.append('Artist', location.state.artist)
        formData.append('ReleaseYear', location.state.releaseYear)
        formData.append('AddDate', location.state.addDate)
        formData.append('Country', location.state.country)
        formData.append('Format', location.state.format)
        formData.append('Genre', location.state.genre)
        formData.append('UnitsInStock', currentStock)
        formData.append('UnitsSold', currentSold)
        formData.append('imageName', location.state.imageName)
        formData.append('imageFile', location.state.imageFile)
        formData.append('imageAlt', location.state.imageAlt)
        productAPI().update(formData.get('ProductId'), formData)
            .catch(err => console.log(err))
        alert("You Bought one copy of " + location.state.name);
        navigate(-1);
    }


    return (
        <>
            <Container fluid className='container ms-auto me-auto'>
                <Row>
                    <Col md={6} className=' justify-content-center flex image-container'>
                        <Image className='image' src={location.state.imageSrc} alt={location.state.imageAlt}></Image>
                    </Col>
                    <Col md={6} className='flex image-container'>
                        <div className='text'>
                            <h1>{location.state.name}</h1>
                            <h2>{location.state.artist}</h2>
                            <div id='format-box' className='format-box'></div>
                            <div id='in-stock' className='in-stock'><OverlayTrigger overlay={renderTooltip}><p id='in-stock-text' className='in-stock-text'></p></OverlayTrigger></div>
                            <br />
                            <p>Country: {location.state.country} <br />
                                Genre: {location.state.genre}<br />
                                Release Date: {d}</p>
                            <Button onClick={purchaseHandler}>Purchase</Button> <br/>
                            {editButton()}

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


