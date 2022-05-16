import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router';
import axios from "axios";
import '../App.css';
import ProductCard from './ProductCard';
import AdminAddProducts from './AdminAddProducts';





export default function ProductList() {

    const [ProductListConst, setProductListConst] = useState([])
    const location = useLocation();



    useEffect(() => {
        refreshProductList();
        // eslint-disable-next-line
    }, [])



    const productAPI = (url = 'http://localhost:5000/api/ProductModels') => {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshProductList() {

        productAPI().fetchAll()
            .then(res => {
                console.log(res.data);
                setProductListConst(res.data)
            })
            .catch(err => console.log(err))
    }
    const CheckForNull = () => {
        if (ProductListConst === null) {
            return (
                <p>There was no Records matching your choice</p>
            );
        }
        else {
            return (
                <ProductCard key={ProductListConst} value={ProductListConst} type={location.state.type} />
            ); 
        }
    }

    if (ProductListConst)

    return (
        <>

            <div className='row'>
                <div className='col'>
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <h1 className="display-5 fw-bold text-center">{location.state.type}</h1>
                    </div>
                </div>
            </div>
            <div className='product-list-container mx-auto'>
                <div className='row'>
                    {CheckForNull()}
                </div>
            </div>
            <div className='row justify-content-center flex' style={{marginTop: "20px"}}>
                <AdminAddProducts productAPI={productAPI}/>
            </div>
        </>
    );
}

