import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className='h-48 box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 w-full flex items-center justify-center'>
      <div className='w-full'>
        <Slider {...settings}>
          <div className='h-48 flex items-center justify-center'>
            {/* <img src='./fast-removebg-preview.png' alt='fast dispatch van' className='h-36 w-36 mb-2' /> */}
            <p className='text-center font-extrabold text-red-500 text-8xl py-14'>Fast</p>
          </div>
          <div className='h-48 flex items-center justify-center'>
            {/* <img src='efficiency-removebg-preview.png' alt='speedometer' className='h-36 w-36 mb-2' /> */}
            <p className='text-center font-extrabold text-green-500 text-8xl py-14'>Efficient</p>
          </div>
          <div className='h-48 flex items-center justify-center'>
            {/* <img src='./reliable-removebg-preview.png' alt='reliability' className='h-36 w-36 mt-14' /> */}
            <p className='text-center font-extrabold text-orange-500 text-8xl py-14'>Reliable</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
