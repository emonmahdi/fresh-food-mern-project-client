import React from 'react';
import aboutImg from './banner.jpg'

const aboutSec ={
    padding: '60px 0'
}
const abouth6 ={
    color: '#9DCA00'
}
const abouth2 = {
    color: '#2B343B',
    fontSize: '35px',
    fontWeight: '700'
}

const About = () => {
    return (
        <div style={aboutSec} id='about-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={aboutImg} style={{height:450}} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content text-start">
                            <h6 style={abouth6}>Welcome To Our Fuodborne Farms</h6>
                            <h2 style={abouth2}>Organic Food - Farm Fresh Produce Right To Your Door</h2>
                            <div className="sub-about-content py-3 border-bottom">
                                <h4>Natural Products </h4>
                                <p style={{color:'#61657a'}}>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. Animals raised organically are also not given antibiotic organic hormones most commonly purchased organic .</p>
                            </div>
                            <div className="sub-about-content py-3">
                                <h4>Wheat Cultivation</h4>
                                <p style={{color:'#61657a'}}>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. Animals raised organically are also not given antibiotic organic hormones most commonly purchased organic .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;