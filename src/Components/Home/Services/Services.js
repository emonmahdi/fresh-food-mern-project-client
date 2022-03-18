import React, { useState , useEffect} from 'react'; 
import Service from '../Service/Service';
 

const serviceSec = {
    padding: '60px 0'
}


const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('https://limitless-shore-74822.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div style={serviceSec} id='services-section'>
            <div className="container">
                <div className="section-title pb-5">
                    <h6>What We Offer</h6>
                    <h2>Service We Offer</h2>
                </div>
                <div className="row">
                    {
                        services.slice(0, 9).map(service =>  <Service
                        key={service._id}
                        service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;