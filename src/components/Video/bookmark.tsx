import React from 'react';
import likeIcon from '../../theme/static/images/like.png';
import likedIcon from '../../theme/static/images/liked.png';
import { Icon } from 'antd';

interface IProps {
    bookmarked: boolean;
    loading: boolean;
    onClick: any;
}

export default class Bookmark extends React.Component<IProps> {
    public render() {
        return (<React.Fragment>{this.props.loading ?
            <Icon type="loading" /> :
            (this.props.bookmarked ? <img onClick={this.props.onClick} src={likedIcon} /> : <img onClick={this.props.onClick} src={likeIcon} />)}</React.Fragment>);
    }
}
