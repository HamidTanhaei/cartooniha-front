import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const layoutStyle = {
  strokeWidth: 99,
  stroke: 'rgb(51, 214, 158)',
};
export default (props: any) => (
  <section className="mainpage-section2">
    <div className="container khatchin">
      <div className="row">
        <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
          <div className="monster" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div className="title">
            جدید ترین انیمیشن ها رو اینجا تماشا کنید!
            <div className="filter">
              <Link to="/m-category/2">
              همه انیمیشن ها
              </Link>
            </div>
            <div className="clear" />
          </div>
          <div id="owlslider1" className="owlslidermp movies-list">
            <Carousel data={props.data} />
          </div>
        </div>
      </div>
    </div>
    <div style={{width: '100%', height: '82px'}}>
      <svg className="svg svgkaj" width="100%" height="82">
        <g strokeWidth="1" stroke="#38dba3 " fill="none">
          <path d="M5 17 2000 78" strokeDasharray="5,5" />
        </g>
        <line className="line" style={layoutStyle} y2="129" x2="1920px" x1="0" y1="70" />
      </svg>
    </div>
  </section>
);
