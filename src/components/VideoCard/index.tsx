import React from 'react';
import { getVideoName } from '../../utils';

import starIcon from '../../theme/static/images/star-off.png';

interface VideoCategory {
    totalepisods: number;
    name: string;
    enname: string;
}

interface Video {
    id: number;
    name: string;
    images: string;
    rating: number;
    viewed: number;
    video_category: VideoCategory;
}

interface Props {
    data: Video;
}

class VideoCard extends React.Component<Props> {
    public render() {
        const {data} = this.props;
        const image = 'http://127.0.0.1:3000/static/images/cartoon-simple-pic.png';
        return (
            <div className="item">
                <img src={image} alt="Owl Image" className="cartoon-image"/>
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
            </div>
        );
    }
}

export default VideoCard;
