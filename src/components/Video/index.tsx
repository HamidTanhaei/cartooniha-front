import React from 'react';
import { IVideoPage } from '../../interfaces/video';
import Layout from '../common/SiteTemplate';
import CommentsList from './CommentsList';
import DownloadLinks from './DownloadLinks';
import MostViews from './MostViews';
import { getVideoEpisodeNumber, getVideoImage } from '../../utils';
import { SingleLine, MultiLine } from '../ContentLoader';
import './style.scss';
import lang from './lang';

import OtherEpisodesCarousel from './OtherEpisods';

type IProps = {
  loading:  false;
  pageData:  IVideoPage;
} | {
  loading: true;
};

const loadingData = {
  id: 100000,
  name: <SingleLine config={{width: 200, height: 15}} />,
  summary: <MultiLine config={{width: 500}} />,
  customorder: <SingleLine config={{width: 100, height: 10}} />,
  bookmarks: {},
  otherEpisodes: {}
};

class VideoPage extends React.Component<IProps> {
  public state = {
    navTabActiveType: 0,
  };

  public changeNavTab = (type: any) => {
    this.setState({ navTabActiveType: type });
  }

  public render() {
    const info = this.props.loading ? loadingData : this.props.pageData;

    let episodeNumber;
    if (!this.props.loading) {
      // @ts-ignore
      episodeNumber = getVideoEpisodeNumber(this.props.pageData.customorder);
    } else {
      episodeNumber = loadingData.customorder;
    }

    return (
      <Layout HeadStyle="inner">
        <section className="innerpage-section2 video-single">
          <div className="background">
            <div className="container">
              <div className="row my-wrapper">
                <MostViews />
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                  <div className="player">
                    <video
                      width="100%"
                      id="MY_VIDEO_1"
                      className="video-js vjs-default-skin"
                      controls={true}
                      preload="none"
                      poster={getVideoImage(info.id)}
                      data-setup="{}"
                    />
                  </div>
                  <div className="likers">
                    {info.bookmarks.length && info.bookmarks.length <= 5 && info.bookmarks.map((person: any, i: number) => {
                      const divider = i < info.bookmarks.length - 1 && ' - ';
                      return (
                          <React.Fragment key={i}>
                            <span>{person.user.first_name} {person.user.last_name}</span>
                            {divider}
                          </React.Fragment>
                      );
                    })}
                    {info.bookmarks.length && info.bookmarks.length > 5 && `${info.bookmarks.length} ${lang.totalBookmarkers}`}
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
                    {info.bookmarks.length && info.bookmarks.length > 5 && info.bookmarks.map((person: any, i: number) => {
                      const divider = i < info.bookmarks.length - 1 && ' - ';
                      return `${person.user.first_name} ${person.user.last_name}${divider}`;
                    })}
                  </div>
                  <hr className="hr-dotted" />
                  <div className="video-info">
                    <div className="video-info-title">
                      <h3>
                        {info.name}
                        <span>
                            {episodeNumber}
                        </span>
                      </h3>
                      <div className="top-view-count">
                        405 بازدید
                      </div>
                      <div className="clear" />
                    </div>
                    <div className="video-info-des">
                      {info.summary}
                    </div>
                  </div>
                  <div className="video-tabs">

                    <ul className="nav nav-tabs">
                      {!!Object.keys(info.otherEpisodes).length && <li className={this.state.navTabActiveType === 0 ? ' active' : ''} onClick={() => this.changeNavTab(0)}>
                        <a>
                          <img src="http://127.0.0.1:3000/static/images/tab2.png" />
                        </a>
                      </li>}

                      <li className={this.state.navTabActiveType === 1 ? ' active' : ''} onClick={() => this.changeNavTab(1)}>
                        <a>
                          <img src="http://127.0.0.1:3000/static/images/tab1.png" />
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      {!!Object.keys(info.otherEpisodes).length && (
                          <div className={`tab-pane ${this.state.navTabActiveType === 0 ? 'active' : ''}`}>
                            <OtherEpisodesCarousel loading={this.props.loading} episodes={info.otherEpisodes} />
                          </div>
                      )}
                      <div className={`tab-pane ${(this.state.navTabActiveType === 1 || !Object.keys(info.otherEpisodes).length) ? ' active' : ''}`}>
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

export default VideoPage;
