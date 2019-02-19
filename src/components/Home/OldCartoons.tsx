import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const layoutStyle = {
  strokeWidth: 99,
  stroke: 'rgb(125, 103, 228)',
};
export default (props: any) => (
  <section className="mainpage-section3">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div className="title">
            بچه ها دوست دارید کارتون‌های بچگی پدر و مادراتون رو ببینید!
            <div className="filter">
              <Link to="/m-category/1">
                همه کارتون ها
              </Link>
            </div>
            <div className="clear" />
          </div>
          <div id="owlslider2" className="owlslidermp movies-list">
            <Carousel data={props.data} />
          </div>
        </div>
        <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
          <div className="monster" />
        </div>
      </div>
    </div>
    <div style={{ width: '100%', height: '66px' }}>
      <svg className="svg svgkaj" width="100%" height="66">
        <g strokeWidth="1" stroke="#7D67E4 " fill="none">
          <path d="M5 60 2000 0" strokeDasharray="5,5" />
        </g>
        <line className="line" style={layoutStyle} y2="56" x2="1920" x1="0" y1="114" />
      </svg>
    </div>
  </section>
);
