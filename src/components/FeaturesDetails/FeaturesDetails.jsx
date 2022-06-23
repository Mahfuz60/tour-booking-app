import React from 'react';
import './FeaturesDetails.css';

const FeaturesDetails = ({ features }) => {
  const { img, title } = features;
  console.log({ img });

  return (
    <div className='col-lg-4 col-md-6 col-10'>
      <div class='card'>
        <img src={img} class='card-img-top featuesImg ' alt='' />
        <div class='card-body'>
          <h4 class='card-title'>{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDetails;
