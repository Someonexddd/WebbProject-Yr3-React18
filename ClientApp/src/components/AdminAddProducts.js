import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ProductForm from './ProductForm';

function AdminAddProducts(props) {
    const Authenticated = useAuth0().isAuthenticated;
    const Loading = useAuth0().isLoading;
    const productAPI = props.productAPI;

    const addOrEdit = (formData) => {
        productAPI().create(formData)
            .then(res => {
                
            })
            .catch(err => console.log(err))
    }
    if (Loading === true && Authenticated === false) {
        return (
            <div className='col-sm-6'>
                <p>Loading</p>
            </div>
        )
    }
    if (Authenticated === true && Loading === false) {
        return (
            <div className='col-sm-6'>
                <ProductForm
                    addOrEdit={addOrEdit} />
            </div>
        )
    }
    if (Authenticated === false && Loading === false) {
        return (
            null
        )
    }
}

export default AdminAddProducts