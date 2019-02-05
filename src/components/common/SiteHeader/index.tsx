import React from 'react';
import { connect } from 'react-redux';
import HeaderHome from './HeaderHome';
import HeaderInner from './HeaderInner';
import User from '../../../containers/User';

import * as actions from '../../../redux/sample/action';

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

interface IProps{
    user: {
        loggedIn: boolean;
        name: string;
    };
    HeadStyle: string;
    sliderData: any;
    name?: string;
}

class TheHeader extends React.Component<IProps>{
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
                            {props.user.loggedIn ? props.user.name : (
                                <React.Fragment>
                                    <div onClick={() => this.setState({isSigninSignupModal: true})} className="register" />
                                    <div onClick={props.dec} className="login" />
                                    {isSigninSignupModal && <User onCancel={() => this.setState({isSigninSignupModal: false})} />}
                                </React.Fragment>
                            )}
                            {props.count}
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
        inc: () => {
            dispatch(actions.increase());
        },
        dec: () => {
            dispatch(actions.decrease());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheHeader);
