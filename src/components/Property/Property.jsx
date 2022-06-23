import React from 'react';
import './Property.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Property = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='properties pb-5'>
      <h3 className='properties-header my-3 mx-0'>Browse by property type</h3>
      <div>
        <Carousel responsive={responsive}>
          <div className='propertiesItem '>
            <img
              src='https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o='
              alt=''
            />
            <h5>Hotels</h5>
            <p>869,982 hotels</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg'
              alt=''
            />
            <h5>Apartments</h5>
            <p>864,236 apartments</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg'
              alt=''
            />
            <h5>Resorts</h5>
            <p>17,949 resorts</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg'
              alt=''
            />
            <h5>Villas</h5>
            <p>454,325 villas</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
              alt=''
            />
            <h5>Cabins</h5>
            <p>34,910 cabins</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg'
              alt=''
            />
            <h5>Cottages</h5>
            <p>149,914 cottages</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg'
              alt=''
            />
            <h5>Serviced Apartments</h5>
            <p>34,572 serviced apartments</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg'
              alt=''
            />
            <h5>Vacation Homes</h5>
            <p>3454,325 vacation homes</p>
          </div>
          <div className='propertiesItem'>
            <img
              src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg'
              alt=''
            />
            <h5>Guest Houses</h5>
            <p>105,549 guest houses</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Property;
