import React from 'react';
import Features from '../../Features/Features';
import Header from '../../Header/Header';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='homeContainer'>
        <Features />
       
      </div>
    </div>
  );
};

export default Home;
