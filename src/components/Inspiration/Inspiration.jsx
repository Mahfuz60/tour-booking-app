import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className="container">
      <h3 className='inspirationHeader py-3'>Get inspiration for your next trip</h3>
      <div className='inspiration'>
        <div className='insirationItem'>
          <img className='inspirationImg' src='https://i.hurimg.com/i/hdn/75/0x0/5ab0ff9ad3806d12540aada2.jpg' alt='' />
          <div className='inspirationTitle'>
            <h3>Istanbul, Turkey</h3>
          </div>
        </div>
        <div className='insirationItem'>
          <img className='inspirationImg' src='https://www.rishirajholidays.com/wp-content/uploads/kasmir.jpg' alt='' />
          <div className='inspirationTitle'>
            <h3>Kasmir,India</h3>
          </div>
        </div>
        <div className='insirationItem'>
          <img className='inspirationImg' src='https://pbs.twimg.com/media/EihEAn4XgAADVQk.jpg' alt='' />
          <div className='inspirationTitle'>
            <h3>Ladak,India</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
