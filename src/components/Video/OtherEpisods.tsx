import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={'/video/' + data.id}>
        <ImgPlaceHolder
            src={getVideoImage(data.id)}
            alt={data.name}
            className="tab-c-img"
        />
        <h3 className="tab-c-title">
          {data.name}
          <br />
        ({getVideoEpisodeNumber(data)})
        </h3>
      </Link>
    </div>);
}

class OtherEpisodesCarousel extends React.Component<IProps> {
  public render() {
    const { loading, episodes } = this.props;
    const settings = {
      dots: true,
      infinite: Object.keys(episodes).length > 5,
      speed: 500,
      slidesToShow: Object.keys(episodes).length >= 5 ? 5 : 1,
      slidesToScroll: Object.keys(episodes).length >= 5 ? 5 : 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: Object.keys(episodes).length >= 2 ? 2 : 1,
            slidesToScroll: Object.keys(episodes).length >= 2 ? 2 : 1,
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
