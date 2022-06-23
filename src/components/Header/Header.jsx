import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBed, faCar, faPlane, faTaxi, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [option, setOption] = useState({ adult: 1, children: 0, room: 1 });
  const [openOption, setOpenOption] = useState(false);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === 'increment' ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  return (
    <div className='header'>
      <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
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
        {type !== 'list' && (
          <>
            <h3 className='headerTitle fw-bold'>A lifetime of discounts? It's Genius.</h3>
            <p className='headerDescription'>
              Get rewarded for your travels unlock instant saving of 10% or more with a free Travel BD Booking Account.
            </p>
            <button className='headerBtn'>Sign in/Register</button>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input type='text' placeholder='Where are you going?' className='headerSearchInput' />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
                <span className='headerInputText' onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                </span>
                {openDate && (
                  <DateRange
                    className='headerCalendar'
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                )}
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className='headerInputText'
                >{`${option.adult} adult , ${option.children} children , ${option.room} room`}</span>
                {openOption && (
                  <div className='option'>
                    <div className='optionItem'>
                      <span className='optionText'>Adult</span>
                      <div className='optionCounter'>
                        <button className='optionCounterBtn ' onClick={() => handleOption('adult', 'increment')}>
                          +
                        </button>
                        <span className='optionNumber'>{option.adult}</span>
                        <button disabled={option.adult <= 1} className='optionCounterBtn' onClick={() => handleOption('adult', 'decrement')}>
                          -
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Children</span>
                      <div className='optionCounter'>
                        <button className='optionCounterBtn ' onClick={() => handleOption('children', 'increment')}>
                          +
                        </button>
                        <span className='optionNumber'>{option.children}</span>
                        <button disabled={option.children <= 0} className='optionCounterBtn' onClick={() => handleOption('children', 'decrement')}>
                          -
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Room</span>
                      <div className='optionCounter'>
                        <button className='optionCounterBtn ' onClick={() => handleOption('room', 'increment')}>
                          +
                        </button>
                        <span className='optionNumber'>{option.room}</span>
                        <button disabled={option.room <= 1} className='optionCounterBtn' onClick={() => handleOption('room', 'decrement')}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerSearchBtn'>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
