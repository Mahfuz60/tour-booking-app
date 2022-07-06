import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Header/Header';
import './Hotelist.css';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../SearchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { isData, isLoading, reFetchData } = useFetch(`http://localhost:5000/api/hotels/?city=${destination}&min=${min || 0}  &max=${max || 999} `);

  const handleSearch = () => {
    reFetchData();
  };

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
                  {`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}
                </span>
                {openDate && <DateRange onChange={(item) => setDates([item.selection])} ranges={dates} minDate={new Date()} />}
              </div>

              <div className='listItem'>
                <div className='listOption'>
                  <label htmlFor=''>Option</label>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Min Price <small>(per night)</small>{' '}
                      <input min={1} type='number' className='listOptionInput ' onChange={(e) => setMin(e.target.value)} />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Max Price <small>(per night)</small>{' '}
                      <input min={1} type='number' className='listOptionInput' onChange={(e) => setMax(e.target.value)} />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Adult <input min={1} type='number' className='listOptionInput' placeholder={setOptions.adult} />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Children <input min={0} type='number' className='listOptionInput' placeholder={options.children} />
                    </span>
                  </div>
                  <div className='listItemOption'>
                    <span className='listOptionText'>
                      Room <input min={1} type='number' className='listOptionInput' placeholder={options.room} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className='searchBtn' onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className='listResult'>
            {isLoading ? (
              <p>loading...</p>
            ) : (
              <div>
                {isData.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
