import React from 'react';
import { FaPhoneAlt, FaGlobeAsia, FaRegEnvelope,FaFacebookF, FaLinkedinIn, FaTwitterSquare} from "react-icons/fa";
const topNavSec ={
    padding: '13px 0',
    backgroundColor: '#2B343B',
    textAlign: 'center',
    color:'#fff'
}

const topNavBody = {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center'
}

const TopNav = () => {
    return ( 
        <div style={topNavSec}>
            <div style={topNavBody} className="container"> 
                <div>
                    <span> <span className='me-2 text-success'><FaPhoneAlt /></span>  88+01908-131513</span>
                    <span><span className='ms-3 me-2 text-danger'><FaGlobeAsia /></span> Barishal sadar, Barishal</span>
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div className='me-3'>
                        <span> <span className='text-warning'><FaRegEnvelope /></span> emonmahdi@gmail.com</span>
                    </div>    
                    
                    <div className="social-link">
                        <span className='me-2'>< FaFacebookF /></span>
                        <span className='me-2'><FaLinkedinIn /></span>
                        <span className='me-2'><FaTwitterSquare /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;