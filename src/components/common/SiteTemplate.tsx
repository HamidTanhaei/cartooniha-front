import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const Layout = (props: any) => (
  <div>
    <SiteHeader sliderData={props.sliderData} HeadStyle={props.HeadStyle} />
    {props.children}
    <SiteFooter />
  </div>
);

export default Layout;
