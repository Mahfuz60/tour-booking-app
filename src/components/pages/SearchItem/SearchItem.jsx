import React from 'react';
import './SearchItem.css';

const SearchItem = () => {
  return (
   
      <div className='searchItem'>
        <img className='searchItem_img'
          src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
          alt=''
        />
        <div className='searchDesc'>
          <h1 className='search_Title'>Tower Street Apartments</h1>
          <span className='search_Distance'>500m from center</span>
          <span className='search_Taxi'>Free airport taxi</span>
          <span className='search_Subtitle'>Studio Apartment with Air conditioning</span>
          <span className='search_Features'>Entire studio • 1 bathroom • 21m² 1 full bed</span>
          <span className='search_Cancel'>Free cancellation </span>
          <span className='Cancel_Subtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='searchItem_Detail'>
          <div className='search_Rating'>
            <h5 className='rating_Title'>Details</h5>
            <span>Excellent</span>
            <button>4.9</button>
          </div>
          <div className='search_DetailTexts'>
            <span className='search_Price'>$112</span>
            <span className='search_Tax'>Includes taxes and fees</span>
            <button className='search_CheckButton'>See availability</button>
          </div>
        </div>
      </div>
   
  );
};

export default SearchItem;
