import React from 'react';
import VideoCard from '../VideoCard';
import './style.scss';
import monsterRedImage from '../../theme/static/images/monster-red.png';

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
                    <div className="row list">
                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                            <img src={monsterRedImage} />
                        </div>
                        {data ? Object.keys(data).map((key) => {
                            return (
                                <div key={key} className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                    <VideoCard data={data[key]}/>
                                </div>
                            );
                        }) : <div>loading...</div>}
                    </div>
                </div>
            </div>
        </section>
    );
};
