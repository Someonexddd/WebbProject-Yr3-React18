import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css'
function ProductCard(props) {
    let products = props.value;

    let type = props.type;
    console.log(type)

    if (type === "LP") {
        let productsFiltered = products.filter(function (el) {
            return el.format === "LP";
        });
        return (
            productsFiltered.map((product) =>

                <div className='col-size' key={product.productId}>

                    <div className="card card-container" style={{ marginTop: "15px" }}>
                        <img className="card-img-top img-thumbnail image-size" src={product.imageSrc} alt={product.imageAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.artist}</p>
                            <Button className="btn-colors" style={{ marginTop: "10px" }} state={product} variant="primary" as={Link} to={
                                {
                                    pathname: '/Details',
                                }
                            }>Details</Button>
                        </div>
                    </div>

                </div>
            )
        );

    }
    else if (type === "CD") {
        let productsFiltered = products.filter(function (el) {
            return el.format === "CD";
        });
        return (
            productsFiltered.map((product) =>

                <div className='col-size' key={product.productId}>

                    <div className="card card-container" style={{ marginTop: "15px" }}>
                        <img className="card-img-top img-thumbnail image-size" src={product.imageSrc} alt={product.imageAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.artist}</p>
                            <Button className="btn-colors" style={{ marginTop: "10px" }} state={product} variant="primary" as={Link} to={
                                {
                                    pathname: '/Details',
                                }
                            }>Details</Button>
                        </div>
                    </div>

                </div>
            )
        );
    }
    else if (type === "Cassette") {
        let productsFiltered = products.filter(function (el) {
            return el.format === "Cassette";
        });
        return (
            productsFiltered.map((product) =>

                <div className='col-size' key={product.productId}>

                    <div className="card card-container" style={{ marginTop: "15px" }}>
                        <img className="card-img-top img-thumbnail image-size" src={product.imageSrc} alt={product.imageAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.artist}</p>
                            <Button className="btn-colors" style={{ marginTop: "10px" }} state={product} variant="primary" as={Link} to={
                                {
                                    pathname: '/Details',
                                }
                            }>Details</Button>
                        </div>
                    </div>

                </div>
            )
        );
    }
    else if (type === "Topsellers") {
        let productsFiltered = products.filter(function (el) {
            return el.unitsSold > 0;
        });

        return (
            productsFiltered.map((product) =>

                <div className='col-size' key={product.productId}>

                    <div className="card card-container" style={{ marginTop: "15px" }}>
                        <img className="card-img-top img-thumbnail image-size" src={product.imageSrc} alt={product.imageAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.artist}</p>
                            <Button className="btn-colors" style={{ marginTop: "10px" }} state={product} variant="primary" as={Link} to={
                                {
                                    pathname: '/Details',
                                }
                            }>Details</Button>
                        </div>
                    </div>

                </div>
            )
        );
    }
    else {
        return (
            products.map((product) =>

                <div className='col-size' key={product.productId}>

                    <div className="card card-container" style={{ marginTop: "15px" }}>
                        <img className="card-img-top img-thumbnail image-size" src={product.imageSrc} alt={product.imageAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.artist}</p>
                            <Button className="btn-colors" style={{ marginTop: "10px" }} state={product} variant="primary" as={Link} to={
                                {
                                    pathname: '/Details',
                                }
                            }>Details</Button>
                        </div>
                    </div>

                </div>
            )
        );
    }
}

export default ProductCard
