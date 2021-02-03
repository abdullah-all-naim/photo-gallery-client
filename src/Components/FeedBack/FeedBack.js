import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FeedBackForm from '../FeedBackForm/FeedBackForm';
import { CommentSharp } from '@material-ui/icons';

const FeedBack = ({ imgId }) => {
    const [comment, setComment] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/feedback/?imageID=' + imgId)
            .then((response) => response.data)
            .then((data) => {
                setComment(data)
            })
    }, [])
    console.log(comment)
    return (
        <>
            <div className='mt-5 bg-primary'>
                <h5>feedback</h5>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className="col-6 mt-5">
                    {/* {comment.length == 0 &&
                        <span class="">Loading...</span>
                    } */}
                    {
                        comment.map(x =>
                                <div className='d-flex'>
                                    <div className=''>
                                        <AccountCircleIcon />
                                    </div>
                                    <div className='text-left ml-2'>
                                        <p>{x.values.name} <small className='ml-2'>{x.values.date}</small> </p>
                                        <p>{x.values.comment}</p>
                                    </div>
                                </div>
                        )
                    }
                </div>
                <div className="col-6">
                    <FeedBackForm imgId={imgId} />
                </div>
            </div>
        </>
    );
};

export default FeedBack;