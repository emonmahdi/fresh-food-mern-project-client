import React from 'react';
import { Link } from 'react-router-dom';

const imgStyle = {
    height: '260px'
}

const Service = ({service}) => {
    const {id,name, img, description } = service
    return (
        <div className='col-lg-4 mb-4'>
             <div className="card">
                 <img src={img} style={imgStyle} className='img-fluid' alt="" />
                 <div className="card-body">
                    <h4>{name}</h4>
                    <p>{description}</p>
                 </div>
                 <div className="buy-btn">
                     <button className='btn btn-dark w-75 my-3 px-3'>
                         <Link className='text-light text-decoration-none' to={`/service/${id}`}>Buy Now &amp; Details</Link>
                     </button>
                 </div>
             </div>
        </div>
    );
};

export default Service;