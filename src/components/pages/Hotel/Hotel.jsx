import React from 'react';
import Header from '../../Header/Header';
import './Hotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../MailList/MailList';
import Footer from '../../Footer/Footer';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { isData, isLoading } = useFetch(`http://localhost:5000/api/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(Date.parse(date2) - Date.parse(date1));
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };
  // function dayDifference(date1, date2) {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleReserve = () => {};
  
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];

  return (
    <div>
      <Header type='list' />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className='hotelContainer'>
          <div className='hotelWraper'>
            <button className='bookNow' onClick={handleReserve}>
              Reserve or Book Now!
            </button>
            <h1 className='hotelHeader'>{isData.name}</h1>
            <div className='hotelAddress'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{isData.address}</span>
            </div>
            <span className='hotelDistance'>
              {isData.review} location – {isData.distance}m from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over ${isData.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className='hotelImages'>
              {photos.map((photo, index) => (
                <div className='hotelImgWraper' key={index}>
                  <img src={photo.src} alt='' className='hotelImg' />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsText'>
                <h1 className='hotelDetails_Title'>Stay in the heart of {isData.city} City</h1>
                <p className='hotelDesc'>
                  {isData.desc} The units come with hardwood floors and feature a fully equipped
                  kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower
                  and a hairdryer. A fridge is also offered, as well as an electric tea pot and a
                  coffee machine. Popular points of interest near the apartment include Cloth Hall,
                  Main Market Square and Town Hall Tower. The nearest airport is John Paul II
                  International Kraków–Balice, 16.1 km from Tower Street Apartments, and the
                  property offers a paid airport shuttle service.
                </p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>Perfect for a -{days + 1} night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an excellent location score
                  of {isData.rating}!
                </span>
                <h2>
                  <b>${(days + 1) * (isData.cheapestPrice * options.room)}</b>({days + 1} night)
                </h2>
                <button onClick={handleReserve}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
