import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <div className='notfound'>
        <h1>404! Not Founded This Pages</h1>
        <button>
          <Link to='/'>Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
