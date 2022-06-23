import React from 'react';
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
  },
  {
    id: 2,
    img: `${sundarban}`,
    title: 'Sundarban',
  },
  {
    id: 3,
    img: `${sylhet}`,
    title: 'Sylhet ',
  },
  { id: 4, img: `${bandarban}`, title: 'Bandarban' },
  { id: 5, img: `${saintMartin}`, title: 'Saint Martin' },
  { id: 6, img: `${rangamati}`, title: 'Rangamati' },
];

const Features = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        {featuresData.map((features, id) => (
          <FeaturesDetails features={features} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Features;
