import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';


const PhotoGallery = () => {
    const [photo, setPhoto] = useState([])
    const [carPhoto, setCarPhoto] = useState([])
    const history = useHistory()
    const { loggedIn, showImage } = useContext(UserContext)
    const [image, setImage] = showImage
    useEffect(() => {
        axios.get('http://localhost:3001/images')
            .then((response) => response.data)
            .then((data) => setPhoto(data))
        // .then(data => setPhoto(data))
    }, [])
    // useEffect(() => {
    //     axios.get('http://localhost:3001/cars')
    //         .then((response) => response.data)
    //         .then((data) => setCarPhoto(data))
    //     // .then(data => setPhoto(data))
    // }, [])
    // console.log(photo)
    const handleClick = (x) => {
        console.log(x)
        setImage(x)
        history.push(`/${((x.caption).split(' ').join('-'))}`)
        // history.push("/" + x.caption)
    }
    console.log(image)
    return (
        <>
        <Navigation/>
            <div>
                <h3>Flowers Section</h3>
                <div className='d-flex flex-wrap justify-content-center' style={{cursor: 'pointer'}}>

                    {
                        photo.slice(0, 3).map(x =>
                            <div onClick={() => handleClick(x)}>
                                <img className='m-3' style={{ width: '200px' }} src={x.images} alt="" />
                                <h5>{x.caption}</h5>
                            </div>
                        )
                    }

                </div> <br /> <br />
                <h3>Car Section</h3>
                <div className='d-flex flex-wrap justify-content-center' style={{cursor: 'pointer'}}>

                    {
                        photo.slice(3, 10).map(x =>
                            <div onClick={() => handleClick(x)}>
                                <img className='m-3' style={{ width: '200px' }} src={x.images} alt="" />
                                <h5>{x.caption}</h5>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default PhotoGallery;