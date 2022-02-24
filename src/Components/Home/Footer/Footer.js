import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css' 

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-6 col-lg-3 ps-2 pe-3 mb-4 text-start"> 
                        <h3 className="footer-title">
                            <Link to='/home'>Fresh Food</Link>
                        </h3>
                        <p className='mb-1'>e-Commerce is a trusted online based shopping website. We are seeing the quality best and the customer satisfaction.</p>
                        <p className='m-0'>Begin your safe online shopping with us</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 text-start">
                        <h3 className='footer-title'>Information</h3>
                        <div className="f-information-link">
                            <a href="#">Terms and Conditions</a>
                            <br />
                            <a href="#">Refund Policy</a>
                            <br />
                            <a href="#">Privacy Policy</a>
                            <br />
                            <a href="#">Shipping or Delivery</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 text-start">
                        <h3 className='footer-title'>Get Our App</h3>
                        <a href="#"><img className='mt-4 img-fluid' src='https://e7.pngegg.com/pngimages/914/679/png-clipart-google-play-app-store-android-jal-jeera-text-label.png' alt="" /></a>
                    </div>
                    <div className="col-md-6 col-lg-3 text-start">
                        <h3 className='footer-title mb-5'>Payment System</h3>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSierz-v1Y89WFMg8FX7DWsCNrCMzjEWUPv0DiXjdbm5WoNi1xLqp21Igkg3_PJ-KN-y8M&usqp=CAU' className='img-fluid' alt="" />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Footer;