import React from 'react';
import MyOrder from '../../Pages/Dashboard/MyOrder/MyOrder';
import About from './About/About';  
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import ReviewClient from './ReviewClient/ReviewClient';
import Services from './Services/Services';
import Slider from './Slider/Slider'; 
import TopNav from './TopNav/TopNav';

const Home = () => {
    return (
        <div>
            <TopNav />
            <Navigation /> 
            <Slider />
            <About /> 
            <Services />
            <ReviewClient />
            <Footer />
            
        </div>
    );
};

export default Home;