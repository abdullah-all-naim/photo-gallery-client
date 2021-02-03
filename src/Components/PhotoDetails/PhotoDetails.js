import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import FeedBack from '../FeedBack/FeedBack';
import Navigation from '../Navigation/Navigation';

const PhotoDetails = () => {
    const { loggedIn, showImage } = useContext(UserContext)
    const [image, setImage] = showImage
    console.log(image)
    const { caption } = useParams()
    console.log(caption)
    const title = caption.split('-').join(" ")
    let imageSRC = ''
    let imageCaption = ''
    let imgId = ''
    console.log(title)
    const [loadData, setLoadData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/images')
            .then((response) => response.data)
            .then((data) => setLoadData(data))
    }, [])
    for (let i = 0; i < loadData.length; i++) {
        if (loadData[i].caption == title) {
            console.log('yes')
            imageSRC = loadData[i].images
            imageCaption = loadData[i].caption
            imgId = loadData[i].imageId

        }
    }
    return (
        <>
        <Navigation />
            <div>
                <div className='d-flex flex-wrap justify-content-center'>
                    <div className="col-6">
                        <img style={{ width: '500px' }} src={imageSRC} alt="" />
                    </div>
                    <div className="col-6">
                        <h4 className='text-left'>{imageCaption}</h4>
                        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aliquid officia ipsa atque adipisci explicabo facilis iste! Voluptatibus, aliquid, cupiditate iusto perferendis eos quo corporis nisi non natus qui in ducimus perspiciatis? Labore accusantium praesentium totam officiis, nemo magnam vero.</p>
                    </div>
                </div>
                <FeedBack imgId={imgId} />
            </div>
        </>
    );
};

export default PhotoDetails;