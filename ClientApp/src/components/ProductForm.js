import React, { useState } from 'react';
import '../App.css';



const defaultImageSrc = "/Images/1998-subar224209566.jpg";

const initalFieldValues = {
    ProductId: "",
    Name: "",
    Artist:"",
    ReleaseYear: "",
    AddDate: "",
    Country: "",
    Format: "",
    Genre: "",
    UnitsInStock: "",
    UnitsSold: "0",
    imageName: "",
    imageSrc: defaultImageSrc,
    imageFile: null,
    imageAlt: null
}

export default function ProductForm(props) {

    const { addOrEdit } = props;
    

    const [values, setValues] = useState(initalFieldValues);
    const [errors, setErrors] = useState({})

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
        else {

            setValues({
                ...values,
                Name: null,
                Artist: null,
                ReleaseYear: null,
                Country: null,
                Format: null,
                Genre: null,
                UnitsInStock: null,
                UnitsSold: "",
                imageName: null,
                imageFile: null,
                imageSrc: defaultImageSrc,
                imageAlt: null
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.Name = values.Name === "" ? false : true;
        temp.Name = values.Artist === "" ? false : true;
        temp.imageAlt = values.imageAlt === "" ? false : true;
        temp.ReleaseYear = values.ReleaseYear === "" ? false : true;
        temp.UnitsInStock = values.UnitsInStock === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }

    const resetForm = () => {
        setValues(initalFieldValues)
        document.getElementById('image-uploader').value = null;
        document.getElementById('imageAlt').value = null;
        document.getElementById('Name').value = null;
        document.getElementById('Artist').value = null;
        document.getElementById('ReleaseYear').value = null;
        document.getElementById('Country').value = null;
        document.getElementById('Format').value = null;
        document.getElementById('Genre').value = null;
        document.getElementById('UnitsInStock').value = null;
        setErrors({});
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData();
            formData.append('ProductId', values.ProductId)
            formData.append('Name', values.Name)
            formData.append('Artist', values.Name)
            formData.append('ReleaseYear', values.ReleaseYear)
            formData.append('AddDate', values.AddDate)
            formData.append('Country', values.Country)
            formData.append('Format', values.Format)
            formData.append('Genre', values.Genre)
            formData.append('UnitsInStock', values.UnitsInStock)
            formData.append('UnitsSold', values.UnitsSold)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            formData.append('imageAlt', values.imageAlt)

            addOrEdit(formData, resetForm())
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
                            <input type="file" accept='image/*' className={'form-control-file' + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margintop10px' + applyErrorClass('imageAlt')} placeholder='imageAlt' name="imageAlt" values={values.imageAlt} onChange={handleInputChange} id="imageAlt"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margintop10px' + applyErrorClass('Name')} placeholder='Name' name="Name" values={values.Name} onChange={handleInputChange} id="Name"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margintop10px' + applyErrorClass('Artist')} placeholder='Artist' name="Artist" values={values.Artist} onChange={handleInputChange} id="Artist"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margintop10px" + applyErrorClass('ReleaseYear')} placeholder='YYYY-MM-DD' name="ReleaseYear" values={values.ReleaseYear} onChange={handleInputChange} id="ReleaseYear"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control margintop10px" placeholder='Country' name="Country" values={values.Country} onChange={handleInputChange} id="Country"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control margintop10px" placeholder='Format' name="Format" values={values.Format} onChange={handleInputChange} id="Format"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control margintop10px" placeholder='Genre' name="Genre" values={values.Genre} onChange={handleInputChange} id="Genre"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margintop10px" + applyErrorClass('UnitsInStock')} placeholder='UnitsInStock' name="UnitsInStock" values={values.UnitsInStock} onChange={handleInputChange} id="UnitsInStock"></input>
                        </div>
                        <div className='form-group text-center margintop10px'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}