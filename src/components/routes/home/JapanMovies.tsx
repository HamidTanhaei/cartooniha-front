import React from 'react';
import Carousel from './Carousel';

const layoutStyle = {
  strokeWidth: 99,
  stroke: 'rgb(242, 241, 235)',
};
export default () => (
  <section className="mainpage-section5">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div className="title">
            اینم برای بچه هایی که عاشق کارتون های ژاپنی اند!
            <div className="filter">همه انیمیشن ها</div>
            <div className="clear" />
          </div>
          <div id="owlslider4" className="owlslidermp movies-list">
            <Carousel />
          </div>
        </div>
        <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
          <div className="monster" />
        </div>
      </div>
    </div>
    <div style={{ width: '100%', height: '66px' }}>
      <svg className="svg svgkaj" width="100%" height="66">
        <g strokeWidth="1" stroke="#f2f1eb " fill="none">
          <path d="M5 60 2000 0" strokeDasharray="5,5" />
        </g>
        <line className="line" style={layoutStyle} y2="56" x2="1920" x1="0" y1="114" />
      </svg>
    </div>
  </section>
);
