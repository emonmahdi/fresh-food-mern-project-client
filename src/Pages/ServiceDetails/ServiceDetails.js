import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../Components/Home/Navigation/Navigation";


const detailsStyle ={
    border: '2px solid #ddd',
    margin: '50px 0px'
}


const ServiceDetails = () => {
  const { Id } = useParams();
  const [singleDetails, setSingleDetails] = useState([]);
  console.log(singleDetails);
  const [getDetails, setGetDetails] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setSingleDetails(data));
  }, []);

  useEffect(() => {
    const productId = Id;
    const details = singleDetails.find((product) => product.id == productId);
    console.log(details)
    setGetDetails(details);
    // console.log(setGetDetails(details))
  }, [singleDetails]);
  return (
    <div> 
     <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div style={detailsStyle} className="details p-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="img-service">
                    <img src={getDetails?.img} className="img-fluid" alt="" />
                  </div>
                  <p className="text-start my-3">{getDetails?.description}</p>
                </div>
                <div className="col-md-4 border-start">
                  <div className="price mt-4">
                    <h3>Price: <span className="text-danger">{getDetails?.price}TK</span></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
              <div style={detailsStyle}  className="order-form">
                  
                  <form className="p-5">
                      <h3>Confirm Your Order Your  </h3>
                      <input type="email" className="form-control my-3" placeholder="Email"/>
                      <input type="text" className="form-control mb-3" placeholder="Name"/>
                      <input type="phone" className="form-control mb-3" placeholder="Phone"/>
                      <input type="text" className="form-control mb-3" placeholder="Address"/>
                      <input type="text" className="form-control mb-3" placeholder="Quantity"/>
                      <button className="btn btn-warning">Place Order</button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
