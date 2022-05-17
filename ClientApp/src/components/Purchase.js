import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';




const initalFieldValues = {
    PurchaseId: "",
    Name: "",
    Adress: "",
    Country: "",
    PurchaseDate: "",
    PostNum: "",
    CardName: "",
    CardNum: "",
    CardCCV: "",
    ProductId: ""
}

export default function PurchaseForm() {

    const location = useLocation();
    //location gets the specific product being purchased
    const state = location.state
    console.log(state)
    const id = state.productId;
    const navigate = useNavigate();

    const productAPI = (url = 'http://localhost:5000/api/PurchaseModels/') => {
        //calls the purchase api and recieves the purchase
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }
    const addOrEdit = (formData) => {
        productAPI().create(formData)
            .then(res => {

            })
            .catch(err => console.log(err))
    }

    const [values, setValues] = useState(initalFieldValues);
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const validate = () => {
        let temp = {}
        temp.Name = values.Name === "" ? false : true;
        temp.Adress = values.Adress === "" ? false : true;
        temp.Country = values.Country === "" ? false : true;
        temp.CardName = values.CardName === "" ? false : true;
        temp.CardNum = values.CardNum === "" ? false : true;
        temp.CardCCV = values.CardCCV === "" ? false : true;
        temp.PostNum = values.PostNum === "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }

    

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData();
            formData.append('PurchaseId', values.PurchaseId)
            formData.append('Name', values.Name)
            formData.append('Adress', values.Adress)
            formData.append('Country', values.Country)
            formData.append('PurchaseDate', values.PurchaseDate)
            formData.append('CardName', values.CardName)
            formData.append('CardNum', values.CardNum)
            formData.append('CardCCV', values.CardCCV)
            formData.append('PostNum', values.PostNum)
            formData.append('ProductId', id)
            addOrEdit(formData)
            navigate(-1)
            alert("You Bought one copy of " + state.name);
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

    return (
        <>
            <div className='container-fluid text-center'>
                <h1 className='purchase-header'>{state.name} by {state.artist}</h1>
            </div>
            <form autoComplete='off' noValidate onSubmit={handleFormSubmit} className='container-body'>
                <div className='card background-color-purchase container-body'>
                    <img src={state.imageSrc} className="card-img-top img-fluid profilepiclarge mx-auto" alt='Product shown' style={{width: "200px", marginTop: "20px"}}/>
                    <div className='card-body'>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Name')} placeholder='Name' name="Name" values={values.Name} onChange={handleInputChange} id="Name"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Adress')} placeholder='Adress' name="Adress" values={values.Adress} onChange={handleInputChange} id="Adress"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('PostNum')} placeholder='PostNum' name="PostNum" values={values.PostNum} onChange={handleInputChange} id="PostNum"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('Country')} placeholder='Country' name="Country" values={values.Country} onChange={handleInputChange} id="Country"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('CardName')} placeholder='Name on Card' name="CardName" values={values.CardName} onChange={handleInputChange} id="CardName"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('CardNum')} placeholder='Card Number' name="CardNum" values={values.CardNum} onChange={handleInputChange} id="CardNum"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('CardCCV')} placeholder='CardCCV' name="CardCCV" values={values.CardCCV} onChange={handleInputChange} id="CardCCV"></input>
                        </div>
                        <div className='form-group text-center margin-top-10'>
                            <button type='submit' className='btn btn-primary'>Purchase</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}