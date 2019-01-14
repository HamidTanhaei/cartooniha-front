import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../../theme/slick/slick-theme.css';
import VideoCard from '../VideoCard';

interface Props {
  data?: any;
}

class Carousel extends React.Component<Props> {
  public render() {
    const { data } = this.props;
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
          {data ? Object.keys(data).map((key) => {
            return (
                <div key={key}>
                  <VideoCard data={data[key]} />
                </div>
            );
          }) : <div>loading...</div>}
        </Slider>
    );
  }
}

export default Carousel;
