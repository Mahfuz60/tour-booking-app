import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Header/Header';
import './Hotelist.css';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../SearchItem/SearchItem';

const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWraper'>
          <div className='listSearch'>
            <h5 className='listTitle'>Search</h5>
            <div className='listSearchItem'>
              <div className='listItem'>
                <label>Destination/property name:</label>
                <input className='listInput' type='text' placeholder={destination} />
              </div>
              <div className='listItem'>
                <label>check-in date</label>
                <span className='listInput' onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                </span>
                {openDate && <DateRange onChange={(item) => setDate([item.selection])} ranges={date} minDate={new Date()} />}
              </div>

              <div className='listItem'>
                <div className='listOption'>
                  <label htmlFor=''>Option</label>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Min Price <small>(per night)</small> <input min={1} type='number' className='listOptionInput ' />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Max Price <small>(per night)</small> <input min={1} type='number' className='listOptionInput' />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Adult <input min={1} type='number' className='listOptionInput' placeholder={option.adult} />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Children <input min={0} type='number' className='listOptionInput' placeholder={option.children} />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Room <input min={1} type='number' className='listOptionInput' placeholder={option.room} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className='searchBtn'>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
