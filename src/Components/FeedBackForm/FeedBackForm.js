import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik'
import dateFormat from 'dateformat'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FeedBackForm = ({ imgId }) => {
    let imgeId = imgId
    // const {loggedIn, showImage} = useContext(UserContext)
    // const [loggedinUser, setLoggedinUser ] = loggedIn
    const { caption } = useParams()
    console.log(caption)
    const title = caption.split('-').join(" ")
    console.log(imgeId)
    const now = new Date();
    const today = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            caption: title,
            date: today,
            comment: ''
        },
        onSubmit: (values, { resetForm}) => {
            axios.post('http://localhost:3001/feedback', { values: values, imageID: imgId })
                .then((response) => console.log(response))
        resetForm()
        setTimeout(function(){ window.location.reload() }, 3000);
        
        }
    })
    console.log(imgId)
    console.log(formik.values)
    return (
        <div style={{ padding: '10px 0' }}>
            <div className='d-flex flex-wrap justify-content-center my-5' style={{ border: '1px solid lightGrey', margin: 'auto', borderRadius: '15px', padding: '30px 0', backgroundColor: 'white' }}>
                <form className='d-flex flex-wrap justify-content-center' onSubmit={formik.handleSubmit}>
                    <div className="form-group col-md-10 mb-4">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control" name='name' id='name' placeholder="Full Name" value={formik.values.name} />
                    </div>
                    <div className="form-group col-md-10 mb-4">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className="form-control" name='email' id='email' placeholder="Enter Your Email Address" />
                    </div>
                    <div className="form-group col-md-10 mb-4">
                        <textarea onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.comment} className="form-control" name='comment' id='comment' placeholder="Write a Feedback" />
                    </div>
                    <button type="submit" className="btn btn-danger col-md-10 ml-2" >Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default FeedBackForm;