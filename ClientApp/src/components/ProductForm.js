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
    //recieves the add or edit prop 

    const [values, setValues] = useState(initalFieldValues);
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    //showpreview makes it so that the image is shown in the form before submit
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
    //makes sure the fields arent null
    const validate = () => {
        let temp = {}
        temp.Name = values.Name === "" ? false : true;
        temp.Artist = values.Artist === "" ? false : true;
        temp.imageAlt = values.imageAlt === "" ? false : true;
        temp.ReleaseYear = values.ReleaseYear === "" ? false : true;
        temp.Format = values.Format === "" ? false : true
        temp.UnitsInStock = values.UnitsInStock === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }

    //Resets the form on submit
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
    
    //as the name implies it handles the form submit and throws errors if it fails
    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData();
            formData.append('ProductId', values.ProductId)
            formData.append('Name', values.Name)
            formData.append('Artist', values.Artist)
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

            //addoredit sends the formdata using the api to the back-end database and then resets the form
            addOrEdit(formData, resetForm())
        }
    }

    //puts the red around non filled fields
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')







    return (
        <>
            <div className='container-fluid text-center'>
                <p className='lead'>Add A Product</p>
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
                            <input className={'form-control margin-top-10' + applyErrorClass('imageAlt')} placeholder='imageAlt' name="imageAlt" values={values.imageAlt} onChange={handleInputChange} id="imageAlt"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Name')} placeholder='Name' name="Name" values={values.Name} onChange={handleInputChange} id="Name"></input>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control margin-top-10' + applyErrorClass('Artist')} placeholder='Artist' name="Artist" values={values.Artist} onChange={handleInputChange} id="Artist"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('ReleaseYear')} placeholder='YYYY-MM-DD' name="ReleaseYear" values={values.ReleaseYear} onChange={handleInputChange} id="ReleaseYear"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control margin-top-10" placeholder='Country' name="Country" values={values.Country} onChange={handleInputChange} id="Country"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('Format')} placeholder='Format (CD, LP or Cassette)' name="Format" values={values.Format} onChange={handleInputChange} id="Format"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control margin-top-10" placeholder='Genre' name="Genre" values={values.Genre} onChange={handleInputChange} id="Genre"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control margin-top-10" + applyErrorClass('UnitsInStock')} placeholder='UnitsInStock' name="UnitsInStock" values={values.UnitsInStock} onChange={handleInputChange} id="UnitsInStock"></input>
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