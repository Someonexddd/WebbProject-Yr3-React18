import React, { useState, useEffect } from 'react';


import axios from "axios";
import '../App.css';
import ProductCard from './ProductCard';
import AdminAddProducts from './AdminAddProducts';





export default function ProductList() {

    const [ProductListConst, setProductListConst] = useState([])




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


    return (
        <>

            <div className='row'>
                <div className='col'>
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <h1 className="display-5 fw-bold text-center">Product register</h1>
                    </div>
                </div>
            </div>
            <div className='productListContainer mx-auto'>
                <div className='row'>
                    <ProductCard key={ProductListConst} value={ProductListConst} />
                </div>
            </div>
            <div className='row'>
                <AdminAddProducts productAPI={productAPI}/>
            </div>
        </>
    );
}

