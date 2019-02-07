import React from 'react';
import './style.scss';

export default () => (
    <section className="footer">
        <div className="trees">
            <div className="inner">
                <img className="bg-img-1" src="http://127.0.0.1:3000/static/images/Vector%20Smart%20Object.png" />
                <img className="bg-img-2" src="http://127.0.0.1:3000/static/images/Vector%20Smart%20Object1.png" />
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
