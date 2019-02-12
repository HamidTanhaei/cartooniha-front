import React from 'react';
import { Link } from 'react-router-dom';
import ImgPlaceHolder from '../ImgPlaceHolder';
import { IVideo } from '../../interfaces/video';
import { getVideoName, getVideoImage } from '../../utils';
import './style.scss';
import starIcon from '../../theme/static/images/star-off.png';

interface IProps {
    data: IVideo;
}

class VideoCard extends React.Component<IProps> {
    public render() {
        const {data} = this.props;
        return (
            <div className="video-card">
                <Link to={'/video/' + data.id}>
                    <div className="cartoon-image">
                        <ImgPlaceHolder
                            src={getVideoImage(data.id)}
                            alt={data.name}
                        />
                    </div>
                    <div className="cartoon-title">
                        {getVideoName(data)}
                    </div>
                    <div className="detail">
                        <div className="rates">
                            <div className="stars">
                                <img src={starIcon} />
                                <img src={starIcon} />
                                <img src={starIcon} />
                                <img src={starIcon} />
                                <img src={starIcon} />
                            </div>
                            {/*todo rater*/}
                            25 رای
                        </div>
                        <div className="like">
                            {/*todo lover*/}
                            309 نفر
                        </div>
                        <div className="views">
                            {data.viewed} نفر
                        </div>
                    </div>
                    <div className="clear"/>
                </Link>
            </div>
        );
    }
}

export default VideoCard;
