import React from 'react';
import Slider from 'react-slick';

function NextSlideArrow(props: any) {
  const { onClick } = props;
  return (<a data-slide="prev" role="button" href="#myCarousel" className="left carousel-control">
    <span onClick={onClick} aria-hidden="true" className="glyphicon my-prev">
      <i className="fa fa-angle-left" />
    </span>
  </a>);
}

function PrevSlideArrow(props: any) {
  const { onClick } = props;
  return (
    <a data-slide="next" role="button" href="#myCarousel" className="right carousel-control">
      <span onClick={onClick} aria-hidden="true" className="glyphicon my-next">
        <i className="fa fa-angle-right" />
      </span>
    </a>);
}

class Carousel extends React.Component {
  public render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      nextArrow: <NextSlideArrow />,
      prevArrow: <PrevSlideArrow />,
    };
    return (
      <Slider {...settings}>
        <div>
          <img className="img-respansive" src="http://127.0.0.1:3000/static/images/img-slide.png" />
        </div>
        <div>
          <img className="img-respansive" src="http://127.0.0.1:3000/static/images/img-slide.png" />
        </div>
        <div>
          <img className="img-respansive" src="http://127.0.0.1:3000/static/images/img-slide.png" />
        </div>
      </Slider>
    );
  }
}

export default () => (
  <div className="row">
    <div className="hidden-xs hidden-sm col-md-2 col-lg-2">
      <div className="monster" />
    </div>
    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 firstSlideshow">
      <div data-ride="carousel" className="carousel slide" id="myCarousel">
        <ol className="carousel-indicators">
          <li className="active" data-slide-to="0" data-target="#myCarousel" />
          <li data-slide-to="1" data-target="#myCarousel" className="" />
        </ol>

        <div role="listbox" className="carousel-inner">
          <Carousel />
        </div>
      </div>
      <ul className="mainlinks">
        <li>
          <div className="icon1 animate03" />
          صفحه اصلی
        </li>
        <li>
          <div className="icon2 animate03" />
          انیمیشن ها
        </li>
        <li>
          <div className="icon3 animate03" />
          کارتون ها
        </li>
        <li>
          <div className="icon4 animate03" />
          انیمیت ها
        </li>
        <li>
          <div className="icon5 animate03" />
          سوالات شما
        </li>
        <li>
          <div className="icon6 animate03" />
          تماس با ما
        </li>
      </ul>
    </div>
  </div>
);
