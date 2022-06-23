import React from 'react';
import Features from '../../Features/Features';
import Header from '../../Header/Header';
import Inspiration from '../../Inspiration/Inspiration';
import Property from '../../Property/Property';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='homeContainer'>
        <Features />
        <Property />
        <h3 className='inspirationHeader'>Get inspiration for your next trip</h3>
        <Inspiration />
      </div>
    </div>
  );
};

export default Home;
