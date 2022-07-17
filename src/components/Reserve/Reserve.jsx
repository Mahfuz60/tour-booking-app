import React, { useContext, useState } from 'react';
import './Reserve.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../components/hooks/useFetch';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

const Reserve = ({ setOpenModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { isData } = useFetch(`http://localhost:5000/api/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleBtn = async () => {
   try{
    await Promise.all(
      selectedRooms.map(roomId=>{
        const res= axios.put(`http://localhost:5000/api/rooms/availability/${roomId}`,{
          dates:allDates,
        });
        return res.data;
      })
    );
    setOpenModal(false);
    Navigate('/');

   }catch{

   }
  
  };
  
  return (
    <div className='container'>
      <div className='reserve'>
        <div className='reserve-container'>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className='reserveClose'
            onClick={() => setOpenModal(false)}
          />
          <span>Select your Room:</span>
          {isData.map((item) => (
            <div className='reserveItem'>
              <div className='reserveItemInfo'>
                <div className='resTitle'>
                  <b>{item.title}</b>
                </div>
                <div className='resDesc'>Description:{item.desc}</div>
                <div className='resmaxPeople'>
                  Max People:<b>{item.maxPeople}</b>
                </div>
                <div className='resPrice'>Price:${item.price}</div>
              </div>
              <div className='resSelectRoom'>
                {item.roomNumber.map((roomNumber) => (
                  <div className='room'>
                    <label>{roomNumber.number}</label>
                    <input
                      type='checkBox'
                      value={roomNumber._id}
                      onChange={handleChange}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className='resButton' onClick={handleBtn}>
            Reserve Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
