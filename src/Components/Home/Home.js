import React from 'react';
import About from './About/About';  
import Navigation from './Navigation/Navigation';
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
            
        </div>
    );
};

export default Home;