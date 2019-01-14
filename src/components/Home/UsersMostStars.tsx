import React from 'react';
import UMSCarousel from './UMSCarousel';

const layoutStyle = {
  strokeWidth: 99,
  stroke: 'rgb(254, 184, 72)',
};

export default (props: any) => (
  <section className="mainpage-section2 mainpage-section4">
    <div className="container">
      <div className="row">
        <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
          <div className="monster" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div className="title">اگه گفتی چه کسی بیشترین امتیاز رو گرفته!</div>
          <div id="owlslider3" className="owlslidermp movies-list">
            <UMSCarousel />
          </div>
        </div>
      </div>
    </div>
    <div style={{width: '100%', height: '66px'}}>
      <svg className="svg svgkaj" width="100%" height="66">
        <g strokeWidth="1" stroke="#feb848 " fill="none">
          <path d="M5 14 1920 72" strokeDasharray="5,5" />
        </g>
        <line className="line" style={layoutStyle} y2="129" x2="1920px" x1="0" y1="70" />
      </svg>
    </div>
  </section>
);
