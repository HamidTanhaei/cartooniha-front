import React from 'react';
import Layout from '../common/SiteTemplate';
import CommentsList from './CommentsList';
import DownloadLinks from './DownloadLinks';
import MostViews from './MostViews';
import OtherEpisodesCarousel from './OtherEpisods';

class Index extends React.Component {
  public state = {
    navTabActiveType: 0,
  };

  public changeNavTab = (type: any) => {
    this.setState({ navTabActiveType: type });
  }
  public render() {
    return (
      <Layout HeadStyle="inner">
        <section className="innerpage-section2">
          <div className="background">
            <div className="container">
              <div className="row my-wrapper">
                <img className="bg-img-1" src="http://127.0.0.1:3000/static/images/Vector%20Smart%20Object.png" />
                <img className="bg-img-2" src="http://127.0.0.1:3000/static/images/Vector%20Smart%20Object1.png" />
                <MostViews />
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                  <div className="player">
                    <video
                      width="100%"
                      id="MY_VIDEO_1"
                      className="video-js vjs-default-skin"
                      controls={true}
                      preload="none"
                      poster="http://cartooniha.com/http://127.0.0.1:3000/static/images/CatsImage/357/player-493x301.jpg"
                      data-setup="{}"
                    />
                  </div>
                  <div className="likers">
                    309 نفر این کارتون را دوست دارند
                  </div>
                  <div className="video-buttons">
                    <a href="#" className="video-opt">
                      <img src="http://127.0.0.1:3000/static/images/likee.png" />
                    </a>
                    <a href="#" className="video-opt">
                      <img src="http://127.0.0.1:3000/static/images/comment.png" />
                    </a>
                    <a href="#" className="video-opt">
                      <img src="http://127.0.0.1:3000/static/images/replay.png" />
                    </a>
                  </div>
                  <div className="likers-name">
                    صبا احدپور-  صبا احدپور- شیلان جلالی - مریم مرادی - نیوشا توکلیان - وفا - مهرداد افسری - علی احمدپور - نازیلا اسدپور آذر - شهاب محمدی - مریلا - علی - صمد پورمرادی
                  </div>
                  <hr className="hr-dotted" />
                  <div className="video-info">
                    <div className="video-info-title">
                      <h3>
                        انیمیشن the simpsons
                        <span>
                                        (اپیزود نوزدهم)
                        </span>
                      </h3>
                      <div className="top-view-count">
                        405 بازدید
                      </div>
                    </div>
                    <div className="video-info-des">
                      <p>
                        هومِرپدر خانواده‌ است. 38 سال سن دارد، سرش طاس است و وزن او نزدیک به 100 کیلوگرم (216 پوند) است. کم مسوًولیت است، که البته علت اصلی دومی، به کم‌هوش بودنش و رفتارهای بچه‌گانه‌اش برمی‌گردد. هومر مسول ایمنی نیروگاه اتمی اسپرینگ فیلد نیز می‌باشد!!! هومر بسیار به بطری‌های آب‌جویش که مارک داف هستند علاقه دارد و همچنین به دونات (پیراشکی) که عاشق آنهاست. شکلات هم زیاد دوست دارد و هیچ‌گاه، حتی در شرایط بد، خوردن چیزهای مورد علاقه اش را قطع نمی‌کند.
                      </p>
                    </div>
                  </div>
                  <div className="video-tabs">

                    <ul className="nav nav-tabs">
                      <li className={this.state.navTabActiveType === 0 ? ' active' : ''} onClick={() => this.changeNavTab(0)}>
                        <a>
                          <img src="http://127.0.0.1:3000/static/images/tab2.png" />
                        </a>
                      </li>
                      <li className={this.state.navTabActiveType === 1 ? ' active' : ''} onClick={() => this.changeNavTab(1)}>
                        <a>
                          <img src="http://127.0.0.1:3000/static/images/tab1.png" />
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className={`tab-pane ${this.state.navTabActiveType === 0 ? ' active' : ''}`}>
                        <OtherEpisodesCarousel />
                      </div>
                      <div className={`tab-pane ${this.state.navTabActiveType === 1 ? ' active' : ''}`}>
                        <DownloadLinks />
                      </div>
                    </div>

                  </div>
                  <div className="comments-wrapper">
                    <div className="comment-title">
                      ارسال نظرات
                    </div>
                    <div className="cm-wrapper">
                      <div className="media wr-cm">
                        <div className="media-right media-bottom">
                          <a href="#">
                            <img className="media-object img img-respansive img-circle" src="http://127.0.0.1:3000/static/images/userimage-simple.png" alt="..." />
                          </a>
                          <span className="wr-arrow" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            علی
                          </h4>
                          <input className="my-cm" placeholder="نظرتو درباره این ویدئو بنویس..." type="text" />
                          <br />
                          <a href="#" className="send-btn" />
                        </div>
                      </div>
                    </div>
                    <CommentsList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Index;
