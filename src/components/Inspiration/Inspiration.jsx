import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className='inspiration'>
      <div className='insirationItem'>
        <img
          className='inspirationImg'
          src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
          alt=''
        />
        <div className='inspirationTitle'>
          <h3>Dublin</h3>
        </div>
      </div>
      <div className='insirationItem'>
        <img
          className='inspirationImg'
          src='https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o='
          alt=''
        />
        <div className='inspirationTitle'>
          <h3>Reno</h3>
        </div>
      </div>
      <div className='insirationItem'>
        <img
          className='inspirationImg'
          src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='
          alt=''
        />
        <div className='inspirationTitle'>
          <h3>Austin</h3>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
