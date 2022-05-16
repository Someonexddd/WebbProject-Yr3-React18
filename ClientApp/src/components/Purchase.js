import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';



const defaultImageSrc = "/Images/1998-subar224209566.jpg";

const initalFieldValues = {
    PurchaseId: "",
    ProductId: "",
    Name: "",
    Adress: "",
    Country: "",
    PurchaseDate: "",
    PostNum: "",
    CardName: "",
    CardNum: "",
    CardCCV: ""
}

export default function PurchaseForm() {

    const productAPI = (url = 'http://localhost:5000/api/PurchaseModels') => {
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
            formData.append('ProductId', values.ProductId)
            formData.append('Name', values.Name)
            formData.append('Adress', values.Adress)
            formData.append('Country', values.Country)
            formData.append('PurchaseDate', values.PurchaseDate)
            formData.append('CardName', values.CardName)
            formData.append('CardNum', values.CardNum)
            formData.append('CardCCV', values.CardCCV)
            formData.append('PostNum', values.PostNum)

            addOrEdit(formData)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')







    return (
        <>
            <div className='container-fluid text-center'>
                <p className='lead'>A Product</p>
            </div>
            <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
                <div className='card'>
                    <img src={values.imageSrc} className="card-img-top img-fluid profilepiclarge mx-auto" alt='Product shown' />
                    <div className='card-body'>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Adress')} placeholder='Adress' name="Adress" values={values.Adress} onChange={handleInputChange} id="Adress"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Name')} placeholder='Name' name="Name" values={values.Name} onChange={handleInputChange} id="Name"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('PostNum')} placeholder='Artist' name="Artist" values={values.Artist} onChange={handleInputChange} id="Artist"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('Country')} placeholder='Country' name="Country" values={values.Country} onChange={handleInputChange} id="Country"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('CardName')} placeholder='YYYY-MM-DD' name="CardName" values={values.CardName} onChange={handleInputChange} id="CardName"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('CardNum')} placeholder='Format (CD, LP or Cassette)' name="CardNum" values={values.CardNum} onChange={handleInputChange} id="CardNum"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('CardCCV')} placeholder='CardCCV' name="CardCCV" values={values.CardCCV} onChange={handleInputChange} id="CardCCV"></input>
                        </div>
                        <div className='form-group text-center margin-top-10'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}