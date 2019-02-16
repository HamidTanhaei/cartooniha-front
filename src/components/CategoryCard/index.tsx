import React from 'react';
import { Link } from 'react-router-dom';
import ImgPlaceHolder from '../ImgPlaceHolder';
import { IVideo } from '../../interfaces/video';
import { getCategoryImage } from '../../utils';
import './style.scss';

interface IProps {
    data: IVideo;
}

class VideoCard extends React.Component<IProps> {
    public render() {
        const {data} = this.props;
        return (
            <div className="category-card">
                <Link to={'/category/' + data.id}>
                    <div className="cartoon-image">
                        <ImgPlaceHolder
                            src={getCategoryImage(data.id)}
                            alt={data.name}
                        />
                    </div>
                    <div className="cartoon-title">
                        {data.name}
                    </div>
                </Link>
            </div>
        );
    }
}

export default VideoCard;
