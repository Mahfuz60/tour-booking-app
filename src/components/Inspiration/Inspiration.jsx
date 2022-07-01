import React from 'react';
import useFetch from '../hooks/useFetch';
import './Inspiration.css';

const Inspiration = () => {
  const { isData, isLoading, error } = useFetch('http://localhost:5000/api/hotels/countByCity?cities=istanbul,kasmir,ladak');
  return (
    <div className='container'>
      <h3 className='inspirationHeader py-3'>Get inspiration for your next trip</h3>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className='inspiration'>
          <div className='insirationItem'>
            <img className='inspirationImg' src='https://i.hurimg.com/i/hdn/75/0x0/5ab0ff9ad3806d12540aada2.jpg' alt='' />
            <div className='inspirationTitle'>
              <h3>Istanbul, Turkey</h3>
              <h6>{isData[0]} properties</h6>
            </div>
          </div>
          <div className='insirationItem'>
            <img className='inspirationImg' src='https://www.rishirajholidays.com/wp-content/uploads/kasmir.jpg' alt='' />
            <div className='inspirationTitle'>
              <h3>Kasmir,India</h3>
              <h6>{isData[1]} properties</h6>
            </div>
          </div>
          <div className='insirationItem'>
            <img className='inspirationImg' src='https://pbs.twimg.com/media/EihEAn4XgAADVQk.jpg' alt='' />
            <div className='inspirationTitle'>
              <h3>Ladak,India</h3>
              <h6>{isData[2]} properties</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inspiration;
