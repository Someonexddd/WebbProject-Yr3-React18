import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';

import axios from "axios";
import '../App.css';
import ProductCard from './ProductCard';




export default function ProductList() {

    const [ProductListConst, setProductListConst] = useState([])




    useEffect(() => {
        refreshProductList();
    }, [])

    const addOrEdit = (formData) => {
        productAPI().create(formData)
            .then(res => {
                refreshProductList();
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

    function refreshProductList() {

        productAPI().fetchAll()
            .then(res => {
                console.log(res.data);
                setProductListConst(res.data)
            })
            .catch(err => console.log(err))
    }




    /* const imageCard = data => (
 
         <div class="card" style="width: 18rem;">
             <img class="card-img-top" src={data.ImageSrc} alt={data.ImageAlt} />
             <div class="card-body">
                 <h5 class="card-title">{data.Name}</h5>
                 <p class="card-text">{data.Artist}</p>
                 <a href="#" class="btn btn-primary">Details</a>
             </div>
         </div>
     ) */





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
                    <ProductCard key={ProductListConst} value={ProductListConst}/>
                </div>
            </div>
            <div className='row'>
            <div className='col-sm-6'>
                    <ProductForm
                        addOrEdit={addOrEdit}/>
                        
                </div>
            </div>
        </>
    );
}

