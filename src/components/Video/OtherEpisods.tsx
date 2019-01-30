import React from 'react';
import Slider from 'react-slick';
import { getVideoEpisodeNumber, getVideoImage } from '../../utils';
import { IVideoOtherEpisodes } from '../../interfaces/video';
import ImgPlaceHolder from '../ImgPlaceHolder';

interface IProps {
  loading: boolean;
  episodes: any;
}

function Item(props: any) {
  const data: IVideoOtherEpisodes = props.data;
  return (
    <div className="item">
      <a href="#">
        <ImgPlaceHolder
            src={getVideoImage(data)}
            alt={data.name}
            className="tab-c-img"
        />
        <h3 className="tab-c-title">
          {data.name}
          <br />
        ({getVideoEpisodeNumber(data)})
        </h3>
      </a>
    </div>);
}

class OtherEpisodesCarousel extends React.Component<IProps> {
  public render() {
    const { loading, episodes } = this.props;
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
          {!loading && Object.keys(episodes).map((key) => <Item key={key} data={episodes[key]} />)}
        </Slider>
      </div>
    );
  }
}

export default OtherEpisodesCarousel;
