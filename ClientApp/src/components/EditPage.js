import React, { useState, useEffect } from 'react';
import '../App.css';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';


const defaultImageSrc = "/Images/1998-subar224209566.jpg";

const initalFieldValues = {
    productId: "",
    name: "",
    artist: "",
    releaseYear: "",
    addDate: "",
    country: "",
    format: "",
    genre: "",
    unitsInStock: "",
    unitsSold: "0",
    imageName: "",
    imageSrc: defaultImageSrc,
    imageFile: null,
    imageAlt: null
}

export default function ProductForm(props) {


    const location = useLocation();
    console.log(location.state);
    const navigate = useNavigate();
    const [recordForEdit, setForEdit] = useState(null);
    const [values, setValues] = useState(initalFieldValues);
    const [errors, setErrors] = useState({})

    const productAPI = (url = 'http://localhost:5000/api/ProductModels/') => {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }


    const addOrEdit = (formData) => {
        productAPI().update(formData.get('ProductId'), formData)
            .catch(err => console.log(err)).then(res => {
                navigate(-1);
            })
    }

    useEffect(() => {
        var executed = false;
        if (!executed) {
            executed = true;
            setForEdit(location.state)
        }
        if (recordForEdit != null) {
            setValues(recordForEdit);
        }
        // eslint-disable-next-line
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        
        }
    }

    const validate = () => {
        let temp = {}
        temp.name = values.name === "" ? false : true;
        temp.artist = values.artist === "" ? false : true;
        temp.imageAlt = values.imageAlt === "" ? false : true;
        temp.releaseYear = values.releaseYear === "" ? false : true;
        temp.format = values.format === "" ? false : true
        temp.unitsInStock = values.unitsInStock === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }



    const handleFormSubmit = e => {
        e.preventDefault()
        console.log(values.artist);
        if (validate()) {
            const formData = new FormData();
            formData.append('ProductId', values.productId)
            formData.append('Name', values.name)
            formData.append('Artist', values.artist)
            formData.append('ReleaseYear', values.releaseYear)
            formData.append('AddDate', values.addDate)
            formData.append('Country', values.country)
            formData.append('Format', values.format)
            formData.append('Genre', values.genre)
            formData.append('UnitsInStock', values.unitsInStock)
            formData.append('UnitsSold', values.unitsSold)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            formData.append('imageAlt', values.imageAlt)

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
                    <img src={values.imageSrc} className="card-img-top img-fluid profilepiclarge mx-auto" alt='Product shown' style={{width: "200px"}}/>
                    <div className='card-body'>
                        <div className='form-group'>
                            <input type="file" accept='image/*' className={'form-control-file' + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('imageAlt')} placeholder='imageAlt' name="imageAlt" values={values.imageAlt} onChange={handleInputChange} id="imageAlt"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Name')} placeholder='Name' name="name" values={values.name} onChange={handleInputChange} id="Name"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Artist')} placeholder='Artist' name="artist" values={values.artist} onChange={handleInputChange} id="Artist"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('ReleaseYear')} placeholder='YYYY-MM-DD' name="releaseYear" values={values.releaseYear} onChange={handleInputChange} id="ReleaseYear"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control margin-top-10" placeholder='Country' name="country" values={values.country} onChange={handleInputChange} id="Country"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('Format')} placeholder='Format (CD, LP or Cassette)' name="format" values={values.format} onChange={handleInputChange} id="Format"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control margin-top-10" placeholder='Genre' name="genre" values={values.genre} onChange={handleInputChange} id="Genre"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('UnitsInStock')} placeholder='UnitsInStock' name="unitsInStock" values={values.unitsInStock} onChange={handleInputChange} id="UnitsInStock"></input>
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