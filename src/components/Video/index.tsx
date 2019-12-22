import React from 'react';
import { IVideoPage } from '../../interfaces/video';
import Layout from '../common/SiteTemplate';
import Comment from './Comment';
import DownloadLinks from './DownloadLinks';
import MostViewsContainer from '../../containers/Video/RelatedVideos';
import BookmarkContainer from '../../containers/Video/Bookmark';
import { SingleLine, MultiLine } from '../ContentLoader';
import { getVideoEpisodeNumber, getVideoImage, getVideoPlayUrl } from '../../utils';
import './style.scss';
import lang from './lang';
import commentImage from '../../theme/static/images/comment.png';
import replyImage from '../../theme/static/images/replay.png';
import tab1Image from '../../theme/static/images/tab1.png';
import tab2Image from '../../theme/static/images/tab2.png';

let MediaElement: any;
if (typeof window !== 'undefined') {
  // @ts-ignore
  const my = require('../Mediaelement');
  MediaElement = my.default;

} else {
  MediaElement = <div />;
}

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
    otherEpisodes: {},
    bookmarked: false,
    ext_fieldsD: '',
    gener: '',
    video_category: {gener: '', video_maincat: {mc_id: 0}}
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

    const viodeFiles = [
        {src: getVideoPlayUrl(info.id, 'm3u8'), type: 'application/x-mpegURL'},
        {src: getVideoPlayUrl(info.id, 'webm'), type: 'video/webm'},
        {src: getVideoPlayUrl(info.id, 'mp4'),  type: 'video/mp4'}
    ];

    return (
        <section className="innerpage-section2 video-single">
          <div className="background">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 hidden-sm hidden-xs hidden-md most-viewed">
                    <div className="top-view-title">
                        کارتون های دیگر
                    </div>
                  {!this.props.loading && <MostViewsContainer tags={info.video_category.gener} />}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                  <div className="player">
                    {!false && (
                        <MediaElement
                            id="player1"
                            mediaType="video"
                            preload="none"
                            controls={true}
                            width="100%"
                            height="360"
                            poster={getVideoImage(info.id)}
                            sources={JSON.stringify(viodeFiles)}
                            options={JSON.stringify({})}
                            tracks={JSON.stringify({})}
                        />
                    )}
                  </div>
                  <div className="likers">
                    {!!info.bookmarks.length && info.bookmarks.length <= 5 && info.bookmarks.map((person: any, i: number) => {
                      const divider = i < info.bookmarks.length - 1 ? ' - ' : '';
                      return (
                          <React.Fragment key={i}>
                            <span>{person.user.first_name} {person.user.last_name}</span>
                            {divider}
                          </React.Fragment>
                      );
                    })}
                    {!!info.bookmarks.length && info.bookmarks.length > 5 && `${info.bookmarks.length} ${lang.totalBookmarkers}`}
                  </div>
                  <div className="video-buttons">
                    <span className="video-opt">
                      <BookmarkContainer bookmarked={info.bookmarked} id={info.id} />
                    </span>
                    <span className="video-opt">
                      <img src={commentImage} />
                    </span>
                    <span className="video-opt">
                      <img src={replyImage} />
                    </span>
                  </div>
                  <div className="likers-name">
                    {!!info.bookmarks.length && info.bookmarks.length > 5 && info.bookmarks.map((person: any, i: number) => {
                      const divider = i < info.bookmarks.length - 1 ? ' - ' : '';
                      return `${person.user.first_name} ${person.user.last_name}${divider}`;
                    })}
                  </div>
                  <hr className="hr-dotted" />
                  <div className="video-info">
                    <div className="title">
                      <h3>
                        {info.name}
                        <span>
                            {episodeNumber}
                        </span>
                      </h3>
                      {/*<div className="top-view-count">
                        405 بازدید
                      </div>*/}
                      <div className="clear" />
                    </div>
                    <div className="summary">
                      <p>
                        {info.summary}
                      </p>
                    </div>
                  </div>
                  <div className="video-tabs">

                    <ul className="nav nav-tabs">
                      {!!Object.keys(info.otherEpisodes).length && <li className={this.state.navTabActiveType === 0 ? ' active' : ''} onClick={() => this.changeNavTab(0)}>
                        <a>
                          <img src={tab2Image} />
                        </a>
                      </li>}

                      <li className={this.state.navTabActiveType === 1 ? ' active' : ''} onClick={() => this.changeNavTab(1)}>
                        <a>
                          <img src={tab1Image} />
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
                        <DownloadLinks linkString={info.ext_fieldsD} />
                      </div>
                    </div>

                  </div>
                  <div className="comments-wrapper">
                    {!this.props.loading && <Comment videoId={info.id}/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default VideoPage;
