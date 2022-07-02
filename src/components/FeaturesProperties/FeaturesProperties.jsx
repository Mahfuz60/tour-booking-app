import React from 'react';
import useFetch from '../hooks/useFetch';
import './FeaturesProperties.css';

const FeaturesProperties = () => {
  const { isData, isLoading, error } = useFetch('http://localhost:5000/api/hotels?featured=true&limit=9');
  return (
    <div className='container mt-3'>
      <h3 className='fp-header pt-3'>Homes guests love</h3>

      <div className='row d-flex'>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            {isData.map((item) => (
              <div className=' col-md-3 col-sm-6  col-10 ' key={item._id}>
                <div className='fp-Item'>
                  <img
                    className='fp-img'
                    src='https://t-cf.bstatic.com/xdata/images/hotel/max500/29465472.jpg?k=7c0133d14c54156613fb89d3baa5bf95ca41241d9805dd2da83092387dd75edc&o='
                    alt=''
                  />
                  <span className='fp-name'>{item.name}</span> <br />
                  <span className='fp-city'>{item.city}</span> <br />
                  <span className='fp-price'>Starting form ${item.cheapestPrice}</span>
                  {item.rating && (
                    <div className='fp-rating'>
                      <button>{item.rating}</button>
                      <span>Wonderful</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturesProperties;
