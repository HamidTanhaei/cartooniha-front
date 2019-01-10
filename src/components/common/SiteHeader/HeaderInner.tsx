import React from 'react';

export default () => (
    <div className="row">
        <div className="hidden-xs hidden-sm col-md-2 col-lg-2"/>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 firstSlideshow">
            <ul className="mainlinks">
                <li>
                    <a href="#">
                        <div className="icon1 animate03"/>
                        صفحه اصلی
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon2 animate03"/>
                        انیمیشن ها
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon3 animate03"/>
                        کارتون ها
                    </a>
                </li>
                <br className="hidden-lg hidden-md hidden-sm"/>
                <li>
                    <a href="#">
                        <div className="icon4 animate03"/>
                        انیمیت ها
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon5 animate03"/>
                        سوالات شما
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon6 animate03"/>
                        تماس با ما
                    </a>
                </li>
            </ul>
        </div>
    </div>
);
