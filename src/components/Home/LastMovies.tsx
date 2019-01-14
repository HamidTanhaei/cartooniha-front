import React from 'react';
import VideoCard from '../VideoCard';

const layoutStyle = {
    strokeWidth: 99,
    stroke: 'rgb(234, 227, 189)',
};
export default (props: any) => {
    const {data} = props;
    return (
        <section className="mainpage-section6">
            <div className="back2">
                <div className="container">
                    <div className="row">
                        <div className="hidden-xs hidden-sm col-md-3 col-lg-3"/>
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                            <div className="title">
                                آخرین ویدئوها رو هم می‌تونید اینجا ببینید!
                                <div className="filter">
                                    نمایش بر اساس
                                    <div className="fitem type">
                                        نوع
                                    </div>
                                    <div className="fitem quality">
                                        کیفیت
                                    </div>
                                </div>
                                <div className="clear"/>
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                            <img src="http://127.0.0.1:3000/static/images/monster-red.png"/>
                        </div>
                        {data ? Object.keys(data).map((key) => {
                            return (
                                <div key={key} className="col-xs-6 col-sm-4 col-md-3 col-lg-3 movies-list">
                                    <VideoCard data={data[key]}/>
                                </div>
                            );
                        }) : <div>loading...</div>}
                    </div>
                </div>
            </div>
            <div className="trees" style={{width: '100%', height: '66px'}}>
                <svg className="svg svgkaj" width="100%" height="66">
                    <g strokeWidth="1" stroke="#eae3bd " fill="none">
                        <path d="M5 60 2000 0" strokeDasharray="5,5"/>
                    </g>
                    <line className="line" style={layoutStyle} y2="56" x2="1920" x1="0" y1="114"/>
                </svg>
            </div>
        </section>
    );
};