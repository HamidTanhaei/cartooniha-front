import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../../theme/slick/slick-theme.css';
import VideoCard from '../VideoCard';

interface IProps {
  data?: any;
}

class Carousel extends React.Component<IProps> {
  public render() {
    const { data } = this.props;
    if (!data) {
      return (<div>loading...</div>);
    }
    const settings = {
      dots: true,
      infinite: Object.keys(data).length > 3,
      speed: 500,
      slidesToShow: Object.keys(data).length >= 3 ? 3 : 1,
      slidesToScroll: Object.keys(data).length >= 3 ? 3 : 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: Object.keys(data).length >= 2 ? 2 : 1,
            slidesToScroll: Object.keys(data).length >= 2 ? 2 : 1,
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
          {Object.keys(data).map((key) => {
            return (
                <div key={key}>
                  <VideoCard data={data[key]} />
                </div>
            );
          })}
        </Slider>
    );
  }
}

export default Carousel;
