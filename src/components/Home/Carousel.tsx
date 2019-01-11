import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../../containers/styles/slick/slick-theme.css';
import Index from '../VideoCard';

class Carousel extends React.Component {
  public render() {
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
    return (
      <Slider {...settings}>
        <div>
          <Index />
        </div>
        <div>
          <Index />
        </div>
        <div>
          <Index />
        </div>
        <div>
          <Index />
        </div>
        <div>
          <Index />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
