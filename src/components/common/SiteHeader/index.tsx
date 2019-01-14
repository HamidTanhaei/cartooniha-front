import React from 'react';
import SiteHeader from '../SiteTemplate';
import HeaderHome from './HeaderHome';
import HeaderInner from './HeaderInner';

const layoutStyle = {
  strokeWidth: 99,
  stroke: 'rgb(237, 228, 30)',
};

const Stroke = () => (
  <div className="trees">
    <svg className="svg svgkaj" width="100%" height="66">
      <g strokeWidth="1" stroke="#EDE41E " fill="none">
        <path d="M5 60 2000 0" strokeDasharray="5,5" />
      </g>
      <line className="line" style={layoutStyle} y2="56" x2="1920" x1="0" y1="114" />
    </svg>
  </div>);

export default (props: any) => (
  <section className={`mainpage-section1-back ${props.HeadStyle === 'inner' ? ' innerpage-section1' : ''}`}>
    <div className="container">
      <div className="row">
        <div className="logo">
          <img src="/static/images/logo.png" alt="" title="" />
        </div>
        <div className="login-register">
          <div className="register" />
          <div className="login" />
        </div>
      </div>
    </div>
    <div className="container">
      {props.HeadStyle === 'home' ? <HeaderHome sliderData={props.sliderData} /> : <HeaderInner />}
    </div>
    <div className="clear" />
    {props.HeadStyle === 'inner' ? '' : <Stroke />}
  </section>
);
