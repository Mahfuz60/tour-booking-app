import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faHotel} />
            <span>Stay</span>
          </div>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rent</span>
          </div>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort Taxi</span>
          </div>
        </div>
        <h3 className='headerTitle'>A lifetime of discounts? It's Genius.</h3>
        <p className='headerDescription'>Get rewarded for your travels unlock instant saving of 10% or more with a free Travel BD Booking Account.</p>
        <button className='headerBtn'>Sign in/Register</button>
      </div>
    </div>
  );
};

export default Header;
