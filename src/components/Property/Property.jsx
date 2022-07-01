import React from 'react';
import './Property.css';
import useFetch from '../hooks/useFetch';

const Property = () => {
  const { isData, isLoading, error } = useFetch('http://localhost:5000/api/hotels/countByType');

  const images = [
    'https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg',
  ];
  return (
    <div className=' mt-5'>
      <div className='properties'>
        <h3 className='properties-header py-3 '>Browse by property type</h3>
        <div>
          {isLoading ? (
            <p>loading....</p>
          ) : (
            <>
              {isData &&
                images.map((img, i) => (
                 
                    <div className='propertiesItem ' key={i}>
                      <img src={img} alt='' className='propertiesImg'/>
                      <h5>{isData[i]?.type}</h5>
                      <p>
                        {isData[i]?.count} {isData[i]?.type}
                      </p>
                    </div>
                  
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Property;
