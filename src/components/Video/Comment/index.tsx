import React from 'react';
import { connect } from 'react-redux';
import lang from './lang';
import CommentList from './List';
import commentApi from '../../../services/api/comment';
import { Icon } from 'antd';
import './style.scss';

interface IProps {
  videoId: number;
  user: any;
}

interface IState {
  sending: boolean;
  error: boolean;
  sent: boolean;
  text?: string;
}

class Comments extends React.Component <IProps> {
  public state: IState = {
    sending: false,
    error: false,
    sent: false,
  };
  public sendComment = async () => {
    const newCommentApi = new commentApi();
    try {
      if (this.input && this.input.value.length > 6) {
        this.setState({sending: true});
        await newCommentApi.commentAdd({videoId: this.props.videoId, text: this.input.value});
        this.setState({sending: false, sent: true, text: this.input.value});
        this.input.value = '';
      } else {
        this.setState({error: true});
      }
    } catch (e) {
      console.log(e);
      this.setState({sending: false});
    }
  }
  private input: HTMLInputElement | undefined | null;
  public render() {
    const { user } = this.props;
    const { sending, error, sent } = this.state;
    return (
        <div className="video-comment">
          <div className="comment-title">
            {lang.comments}
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
                {user.fname && (
                    <h4 className="media-heading">
                      {user.fname}
                    </h4>
                )}
                {sent ? this.state.text : <input className="my-cm" placeholder={lang.writeYourComment} type="text" onFocus={() => this.setState({error: false})} ref={(ref) => {this.input = ref; }} />}
                <br />
                {error && <span className="error">{lang.commentTextNotEnought}</span>}
                {sent && <span className="success">{lang.commentSentSuccess}</span>}
                {!sent && (
                    <div className="send">
                      {sending ? <Icon type="loading" style={{color: 'red'}} /> : <a className="button" onClick={this.sendComment} />}
                    </div>
                )}
              </div>
            </div>
          </div>
          {this.props.videoId && <CommentList videoId={this.props.videoId} />}
        </div>);
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, undefined)(Comments);
