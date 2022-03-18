import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ReviewClient = () => {
    const {user} = useAuth()
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://limitless-shore-74822.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []) 
    return (
        <div style={{padding:'50px 0', background: '#ddd'}}>
            <h3 style={{marginBottom: '40px'}}> Client Review </h3>

            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <div key={review._id} className='col-md-3'>
                            <div className="card rounded-3 shadow">
                                <div className="card-body">
                                    <h4 className='my-2'>Review By</h4>
                                    <img src={user.photoURL} style={{borderRadius:'50%', marginBottom: '10px'}} height='60px' width='60px'  alt="" />
                                    <h5>{review.customerName}</h5>
                                    <p>{review.comment}</p>
                                    <Rating
                                    readOnly
                                    name="simple-controlled"
                                    value={review.star} 
                                    /> 
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ReviewClient;