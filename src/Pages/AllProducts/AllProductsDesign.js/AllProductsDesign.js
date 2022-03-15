import React from 'react';
import { Link } from 'react-router-dom';

const imgStyle = {
    height: '260px'
}

const AllProductsDesign = ({allproduct}) => {
    const {_id,name, image, description } = allproduct;
    return ( 
        <div className='col-lg-4 mb-4'>
            
            <div className="card">
                <img src={image} style={imgStyle} className='img-fluid' alt="" />
                <div className="card-body">
                   <h4>{name}</h4>
                   <p>{description.slice(0,230)}</p>
                </div>
                <div className="buy-btn">
                    <button className='btn btn-dark w-75 my-3 px-3'>
                        <Link className='text-light text-decoration-none' to={`/service/${_id}`}>Buy Now &amp; Details</Link>
                    </button>
                </div>
            </div>
       </div> 
    );
};

export default AllProductsDesign;