import React from 'react';
import ImgPlaceHolder from '../ImgPlaceHolder';
import { IVideo } from '../../interfaces/video';
import { getVideoName, getVideoImage } from '../../utils';

import starIcon from '../../theme/static/images/star-off.png';
import { Link } from 'react-router-dom';

interface IProps {
    data: IVideo;
}

class VideoCard extends React.Component<IProps> {
    public render() {
        const {data} = this.props;
        return (
            <div className="item">
                <Link to={'/video/' + data.id}>
                    <ImgPlaceHolder
                        src={getVideoImage(data)}
                        alt={data.name}
                        className="cartoon-image"
                    />
                    <div className="cartoon-title">
                        {getVideoName(data)}
                    </div>
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
                    <div className="clear"/>
                </Link>
            </div>
        );
    }
}

export default VideoCard;
