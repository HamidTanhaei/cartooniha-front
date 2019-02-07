import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/user/action';
import HeaderHome from './HeaderHome';
import HeaderInner from './HeaderInner';
import User from '../../../containers/User';
import { IUser } from '../../../interfaces/user';
import lang from './lang';

const layoutStyle = {
  strokeWidth: 99,
  stroke: 'rgb(237, 228, 30)',
};

const Stroke = () => (
  <div className="trees">
    <svg className="svg svgkaj" width="100%" height="66">
      <g strokeWidth="1" stroke="#EDE41E " fill="none">
        <path d="M5 60 2000 0" strokeDasharray="5,5" />
      </g>
      <line className="line" style={layoutStyle} y2="56" x2="1920" x1="0" y1="114" />
    </svg>
  </div>);

interface IProps {
    user: IUser | any;
    HeadStyle: string;
    sliderData: any;
    name?: string;
    logout?: any;
}

class TheHeader extends React.Component<IProps> {
    public state = {
        isSigninSignupModal: false
    };
    public render() {
        const { isSigninSignupModal } = this.state;
        const props = this.props;
        return(
            <section className={`mainpage-section1-back ${props.HeadStyle === 'inner' ? ' innerpage-section1' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="logo">
                            <img src="/static/images/logo.png" alt="" title="" />
                        </div>
                        <div className="login-register">
                            {props.user.token ? (
                                <div className="button-group-fantasy">
                                    <div className="button-fantasy gray" onClick={this.props.logout}>
                                        {lang.logout}
                                    </div>
                                    <div className="button-fantasy yellow">
                                        {lang.profile} {props.user.fname}
                                    </div>
                                </div>
                            ) : (
                                <React.Fragment>
                                    <div onClick={() => this.setState({isSigninSignupModal: true})} className="register" />
                                    <div onClick={() => this.setState({isSigninSignupModal: true})} className="login" />
                                    {isSigninSignupModal && <User onCancel={() => this.setState({isSigninSignupModal: false})} />}
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
                <div className="container">
                    {props.HeadStyle === 'home' ? <HeaderHome sliderData={props.sliderData} /> : <HeaderInner />}
                </div>
                <div className="clear" />
                {props.HeadStyle === 'inner' ? '' : <Stroke />}
            </section>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        count: state.sampleReducer.count,
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        logout: (data: any) => {
            dispatch(actions.logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheHeader);
