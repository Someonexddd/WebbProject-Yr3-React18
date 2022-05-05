import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function ProductCard(props) {
    let products = props.value;
    return (
        
        products.map((product) =>
        <div className='col-4' key={product.productId}>

            <div className="card">
                <img className="card-img-top img-thumbnail imageSize " src={product.imageSrc} alt={product.imageAlt} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.artist}</p>
                    <Button variant="primary" as={Link} to={
                        {
                            pathname: '/Details',
                            state:product.productId
                        }
                    }>Details</Button>
                </div>
            </div>

        </div>
    )
    );}

export default ProductCard
