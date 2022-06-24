import React from 'react';
import Features from '../../Features/Features';
import FeaturesProperties from '../../FeaturesProperties/FeaturesProperties';
import Header from '../../Header/Header';
import Inspiration from '../../Inspiration/Inspiration';
import MailList from '../../MailList/MailList';
import Property from '../../Property/Property';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='homeContainer'>
        <Features />
        <Inspiration />
        <Property />
        <FeaturesProperties />
        <MailList/>
      </div>
    </div>
  );
};

export default Home;
