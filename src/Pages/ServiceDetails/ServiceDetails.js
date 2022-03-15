import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';  
import useAuth from '../../Components/hooks/useAuth';
import Navigation from '../../Components/Home/Navigation/Navigation';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const {Id} = useParams();  
    const {user} = useAuth();
    // console.log(user); 

    const [singleDetails, setSingleDetails] = useState([]);
    // console.log(singleDetails)
    
    const [getDetails, setGetDetails] = useState({})
    console.log(getDetails)

    useEffect( () => {
        fetch('http://localhost:5000/products') 
            .then(res => res.json())
            .then(data => setSingleDetails(data))
    }, []) 

    useEffect( () => {
      const details = singleDetails.find(td => td._id == Id );
      setGetDetails(details);
    }, [singleDetails]);
 
      // ===========================================
      const { register, handleSubmit, reset, formState: { errors } } = useForm();
         const axios = require('axios');
         const onSubmit = data => {
             console.log(data) 
          //    data.status = 'Pending';
             data.getDetails= getDetails;
          axios.post('http://localhost:5000/orders', data)
              .then(res => {
                  if(res.data.insertedId){
                    Swal.fire(
                      'Congratulations!',
                      'Order Food Successfully',
                      'success'
                    )
                      reset();
                  }
              })
         }

    return (
        <>
        <Navigation />
        <div className='container my-4 pb-5'>
            <div className="row"> 
                {/* ======================================= */}
                 <div className="col-lg-6 bg-light ">
                    <div className="single-details-services p-3 text-start">
                        <div className="title">
                            <h2 className='fw-bold mb-4'>{getDetails?.name}</h2> 
                        </div>
                        <div className="single-details-img  rounded">
                            <div className="row">
                                <div className="col-md-6">
                                <img src={getDetails?.image}  className='img-fluid mx-auto rounded-3 shadow' alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h4 className='text-end'>
                                         <span className='text-primary  fw-bold'>Price: {getDetails?.price} Taka</span> 
                                    </h4>
                                </div>
                            </div>
                        </div> 
                        <p className='my-4'>{getDetails?.description}</p>
                        
                    </div>
                </div>
                {/* ============================= */}
                <div className="col-lg-6">
                <h3 className='mb-3 fw-bold'>Booking Order Information</h3>
                   
                    <form onSubmit={handleSubmit(onSubmit) } className='p-3 border bg-light'> 
                        <input type='text' className='form-control mb-2'   {...register("name")} value={user.displayName} placeholder='Name' />
                          

                        <input type='text' value={user.email} className='form-control mb-2' {...register("email", { required: true })} placeholder='Email' />  
 

                        <input type='text' className='form-control mb-2' {...register("address", { required: true })} placeholder='Address' /> 

                        <input type='text' className='form-control mb-2' {...register("phone", { required: true })} placeholder='Phone' /> 

                        <input type='text' className='form-control mb-2' {...register("quantity",  { required: true })} placeholder='quantity'/>  

                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input className='btn btn-warning' value='Place Order' type="submit" />
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default ServiceDetails;