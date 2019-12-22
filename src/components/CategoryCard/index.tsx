import React from 'react';
import { Link } from 'react-router-dom';
import ImgPlaceHolder from '../ImgPlaceHolder';
import { IVideoCategory } from '../../interfaces/video';
import { getCategoryImage } from '../../utils';
import './style.scss';

interface IProps {
    data: IVideoCategory;
}

class VideoCard extends React.Component<IProps> {
    public render() {
        const {data} = this.props;
        const link = this.props.data.cartoons.length === 1 ? '/video/' + data.cartoons[0].id : '/category/' + data.id;
        return (
            <div className="category-card">
                <Link to={link}>
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
