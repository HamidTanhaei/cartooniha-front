import React from 'react';
import './style.scss';
import Tree1Image from '../../../theme/static/images/footer-1.png';
import Tree2Image from '../../../theme/static/images/footer-2.png';

const layoutStyle = {
    strokeWidth: 99,
    stroke: 'rgb(234, 227, 189)',
};

export default () => (
    <section className="footer">
        <div className="trees" style={{width: '100%', height: '66px'}}>
            <svg className="svg svgkaj" width="100%" height="66">
                <g strokeWidth="1" stroke="#eae3bd " fill="none">
                    <path d="M5 60 2000 0" strokeDasharray="5,5"/>
                </g>
                <line className="line" style={layoutStyle} y2="56" x2="1920" x1="0" y1="114"/>
            </svg>
            <img className="bg-img-2" src={Tree2Image} />
            <img className="bg-img-1" src={Tree1Image} />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                    <div className="item">
                        <div className="ribbon">تماس با ما</div>
                        <div className="content contact">
                            <div>می توانید از طریق فرم زیر با ما در ارتباط باشید</div>
                            <div className="formitem"><input type="text" placeholder="نام"/></div>
                            <div className="formitem"><input type="text" placeholder="ایمیل"/></div>
                            <div className="formitem"><textarea placeholder="متن پیغام"/></div>
                            <input type="submit" value=""/>
                            <div className="clear"/>
                        </div>
                    </div>
                </div>
                <div className="hidden-xs col-sm-4 col-md-3 col-lg-3">
                    <div className="item">
                        <div className="ribbon">آخرین اخبار</div>
                        <div className="content news">
                            <ul>
                                <li>
                                    <span/>
                                    <div><a href="#">معرفی پر امتیازترین کاربر مردادماه</a></div>
                                </li>
                                <li>
                                    <span/>
                                    <div>معرفی پر امتیازترین کاربر مردادماه</div>
                                </li>
                                <li>
                                    <span/>
                                    <div>کارتون تن تن پربازدیدترین ویدئو روز</div>
                                </li>
                                <li>
                                    <span/>
                                    <div>معرفی پر امتیازترین کاربر مردادماه</div>
                                </li>
                                <li>
                                    <span/>
                                    <div>معرفی پر امتیازترین کاربر مردادماه</div>
                                </li>
                                <li>
                                    <span/>
                                    <div>معرفی پر امتیازترین کاربر مردادماه</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hidden-xs col-sm-4 col-md-3 col-lg-3">
                    <div className="item">
                        <div className="ribbon">آخرین دیدگاه ها</div>
                        <div className="content comments">
                            <ul>
                                <li>
                                    <div className="name">روشنک کمالی</div>
                                    <div className="date">2 ساعت پیش</div>
                                    <div className="clear"/>
                                    <div className="text">انیمیشن بتمن دوبله فارسی نشده؟</div>
                                </li>
                                <li>
                                    <div className="name">روشنک کمالی</div>
                                    <div className="date">2 ساعت پیش</div>
                                    <div className="clear"/>
                                    <div className="text">انیمیشن بتمن دوبله فارسی نشده؟</div>
                                </li>
                                <li>
                                    <div className="name">روشنک کمالی</div>
                                    <div className="date">2 ساعت پیش</div>
                                    <div className="clear"/>
                                    <div className="text">انیمیشن بتمن دوبله فارسی نشده؟</div>
                                </li>
                                <li>
                                    <div className="name">روشنک کمالی</div>
                                    <div className="date">2 ساعت پیش</div>
                                    <div className="clear"/>
                                    <div className="text">انیمیشن بتمن دوبله فارسی نشده؟</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
                    <div className="item">
                        <div className="ribbon">نظر سنجی</div>
                        <div className="content">
                            بیشتر تمایل دارید به کدام قسمت از وبسایت رسیدگی شود؟
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
