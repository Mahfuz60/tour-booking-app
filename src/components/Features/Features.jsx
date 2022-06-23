import React from 'react';
import './Features.css';
import FeaturesDetails from '../FeaturesDetails/FeaturesDetails';
import coxsBazar from '../../assest/images/coxBazar.jpg';
import sundarban from '../../assest/images/sundarban.jpg';
import sylhet from '../../assest/images/sylhet.jpg';
import bandarban from '../../assest/images/bundarban.jpg';
import rangamati from '../../assest/images/rangamati.jpg';
import saintMartin from '../../assest/images/saintMartin.jpg';

const featuresData = [
  {
    id: 1,
    img: `${coxsBazar}`,
    title: "Cox's Bazar",
    property: '100 properties',
  },
  {
    id: 2,
    img: `${sundarban}`,
    title: 'Sundarban',
    property: '40 properties',
  },
  {
    id: 3,
    img: `${sylhet}`,
    title: 'Sylhet ',
    property: '50 properties',
  },
  { id: 4, img: `${bandarban}`, title: 'Bandarban', property: '70 properties' },
  { id: 5, img: `${saintMartin}`, title: 'Saint Martin', property: '150 properties' },
  { id: 6, img: `${rangamati}`, title: 'Rangamati', property: '30 properties' },
];

const Features = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='features-header'>
          <h3>Explore Bangladesh</h3>
          <p>These popular destinations have a lot to offer</p>
        </div>
        {featuresData.map((features, id) => (
          <FeaturesDetails features={features} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Features;
