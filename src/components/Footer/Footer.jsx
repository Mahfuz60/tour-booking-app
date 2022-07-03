import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container pt-4'>
      <div className='row d-flex '>
        <div className='col-md-3 col-10 footerList'>
          <ul>
            <li>Countries</li>
            <li> Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
            <li>Places of interest</li>
            <li>Flight finder</li>
            <li>Restaurant reservations</li>
          </ul>
        </div>
        <div className='col-md-3 col-10 footerList'>
          <ul>
            <li>Homes</li>
            <li> Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>B&Bs</li>
            <li>Guest houses</li>
            <li>Partner help</li>
            <li>Corporate contact</li>
          </ul>
        </div>
        <div className='col-md-3 col-10 footerList'>
          <ul>
            <li> Unique places to stay</li>
            <li>All destinations</li>
            <li>Discover</li>
            <li>Villas</li>
            <li>Reviews</li>
            <li>Travel communities</li>
            <li>Seasonal and holiday deals</li>
            <li> Car rental</li>
            <li>TravelBd.com for Travel Agents</li>
          </ul>
        </div>

        <div className=' col-md-3 col-10 footerList'>
          <ul>
            <li>About TravelBd.com</li>
            <li>Customer Service Help</li>
            <li>Sustainability</li>
            <li>Press center</li>
            <li>Terms & conditions</li>
            <li>Privacy & cookie statement</li>
            <li>Corporate contact</li>
          </ul>
        </div>
      </div>
      <div className='footerText'>
        <p>Copyright © 1996–{new Date().getFullYear()} TravelBd.com™. All rights reserved.</p>
        <p>TravelBd.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
      </div>
    </div>
  );
};

export default Footer;
