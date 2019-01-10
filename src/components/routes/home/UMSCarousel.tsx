import React from 'react';
import Slider from 'react-slick';

const Item = () => (
  <div className="item">
    <div className="image">
      <img src="http://127.0.0.1:3000/static/images/userimage-simple.png" />
    </div>
    <div className="name">
      علی
      <br />
      300 امتیاز
    </div>
  </div>);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const Carousel = () => (
  <Slider {...settings}>
    <div>
      <Item />
    </div>
    <div>
      <Item />
    </div>
    <div>
      <Item />
    </div>
    <div>
      <Item />
    </div>
    <div>
      <Item />
    </div>
  </Slider>
);

export default Carousel;
