import React from 'react';
import CommentApi from '../../../services/api/comment';
import { daysBetween, elapsedTime } from '../../../utils';
import lang from './lang';
import userSimpleImage from '../../../theme/static/images/userimage-simple.png';

interface IProps {
    videoId: number;
}

interface IState {
    comments: any;
}

export default class CommentList extends React.Component<IProps, IState> {
    public state: IState = {
        comments: []
    };
    public async componentDidMount() {
        try {
            const newCommentsApi = new CommentApi();
            const comments = await newCommentsApi.commentList(this.props.videoId);
            this.setState({comments: comments.data});
        } catch (e) {
            console.log(e);
        }
    }

    private elaspedTime(date: number) {
        const now = new Date();
        const date2 = new Date(date * 1000);
        const differentDays = daysBetween(date2 , now);
        if (differentDays <= 2) {
            return `${differentDays} ${lang.day} ${lang.preDate}`;
        } else {
            return `${elapsedTime(date2, now)} ${lang.preDate}`;
        }
    }

    public render() {
        const state = this.state;

        return (
            <React.Fragment>
                {state.comments ? state.comments.map((comment: any, key: number) => (<div className="cm-wrapper">
                    <div key={key} className="media">
                        <div className="media-right">
                            <a href="#">
                                <img className="media-object img img-respansive img-circle" src={userSimpleImage} alt="..." />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">
                                {comment.user.first_name}
                                <span>{this.elaspedTime(comment.co_date)}</span>
                            </h4>
                            {comment.co_comment}
                            <br />
                            <a href="#" className="replay-btn" />
                        </div>
                    </div>
                </div>)) : '' }
            </React.Fragment>
        );
    }
}
