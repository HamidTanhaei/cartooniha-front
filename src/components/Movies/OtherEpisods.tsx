import React from 'react';
import Slider from 'react-slick';

function Item() {
  return (
    <div className="item">
      <a href="#">
        <img src="http://127.0.0.1:3000/static/images/ep1.jpg" alt="Owl Image" className="tab-c-img" />
        <h3 className="tab-c-title">
        انیمیشن the simpsons
          <br />
        (اپیزود شانزدهم)
        </h3>
      </a>
    </div>);
}

class OtherEpisodesCarousel extends React.Component {
  public render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
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
    return (
      <div id="tab-owl" className="owlslidermp">
        <Slider {...settings}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Slider>
      </div>
    );
  }
}

export default OtherEpisodesCarousel;
