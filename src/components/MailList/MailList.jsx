import React from 'react';
import './MailList.css';

const MailList = () => {
  return (
    <div className='mail'>
      <h4 className='mailTitle'>Save time, save money!</h4>
      <span className='mailDesc'>Sign up and we'll send the best deals to you</span>
      <div className='mailInputContainer'>
        <input  type='text' placeholder='your email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
