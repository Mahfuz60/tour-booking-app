import React from 'react';
import './FeaturesProperties.css';

const FeaturesProperties = () => {
  return (
    <div className='container mt-3'>
      <h3 className='fp-header pt-3'>Homes guests love</h3>
      <div className='featuresProperties'>
        <div className='fp-Item'>
          <img
            className='fp-img'
            src='https://t-cf.bstatic.com/xdata/images/hotel/max500/29465472.jpg?k=7c0133d14c54156613fb89d3baa5bf95ca41241d9805dd2da83092387dd75edc&o='
            alt=''
          />
          <span className='fp-name'>Cheval  Tower of London</span>
          <span className='fp-city'>London</span>
          <span className='fp-price'>Starting form $600</span>
          <div className='fp-rating'>
            <button>5</button>
            <span>Wonderful</span>
          </div>
        </div>
        <div className='fp-Item'>
          <img
            className='fp-img'
            src='https://t-cf.bstatic.com/xdata/images/hotel/max500/38437078.jpg?k=241519692574af90306f0dbec0121eacfddc9a183df3ea34a7b7c8f2b4f5febb&o='
            alt=''
          />
          <span className='fp-name'>Unique Design Apartments</span>
          <span className='fp-city'>Lisbon</span>
          <span className='fp-price'>Starting form $550</span>
          <div className='fp-rating'>
            <button>4.9</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className='fp-Item'>
          <img
            className='fp-img'
            src='https://t-cf.bstatic.com/xdata/images/hotel/max500/97644401.jpg?k=809528f82d4b64141dc312b8a304fe971b16dfb0e2721e4941391c5acaaa8378&o='
            alt=''
          />
          <span className='fp-name'>Romance al Colosseo</span>
          <span className='fp-city'>Rome</span>
          <span className='fp-price'>Starting form $450</span>
          <div className='fp-rating'>
            <button>4.8</button>
            <span>Good</span>
          </div>
        </div>
        <div className='fp-Item'>
          <img
            className='fp-img'
            src='https://t-cf.bstatic.com/xdata/images/hotel/max500/64768746.jpg?k=b0a62a2eb299aaa31553ffcb9887d54cb5ea112e81a7a942a45aa25f88c84921&o='
            alt=''
          />
          <span className='fp-name'>Zoku Amsterdam</span>
          <span className='fp-city'>Amsterdam</span>
          <span className='fp-price'>Starting form $480</span>
          <div className='fp-rating'>
            <button>4.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesProperties;
