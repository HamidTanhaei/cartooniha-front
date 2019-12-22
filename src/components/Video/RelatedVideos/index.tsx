import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { getVideoImage, getVideoName } from '../../../utils';
import ImgPlaceHolder from '../../../components/ImgPlaceHolder';
import lang from './lang';
import { IVideo } from '../../../interfaces/video';

interface IProps {
  data: any;
}

class RelatedVideos extends React.Component<IProps> {
  public render() {
    const { data } = this.props;
    return(
        <>
            {data.map((item: IVideo, key: number) => (
                <div className="top-view-item" key={key}>
                    <Link to={'/video/' + item.id}>
                        <div className="img-wrapper">
                            <ImgPlaceHolder
                                src={getVideoImage(item.id)}
                                alt={item.name}
                            />
                        </div>
                        <div className="content-wrapper">
                            <h3>
                                {getVideoName(item)}
                            </h3>
                            <div className="top-view-count">
                                {item.viewed} {' ' + lang.view}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

            {/*<a href="#" className="read-more-left">
                نمایش بیشتر
            </a>*/}
        </>
    );
  }
}

export default RelatedVideos;
