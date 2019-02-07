import React from 'react';
import { Modal } from 'antd';
import GetNumber from '../../components/User/GetNumber';
import Login from '../../components/User/Login';
import NumberVerifyCheck from '../../components/User/NumberVerifyCheck';
import Register from '../../components/User/Register';
import ForgetPassword from '../../components/User/ForgetPassword';
import lang from './lang';
import './style.scss';

interface IProps {
    onCancel: any;
}

interface IState {
    showType: 'getNumberToCheck' | 'login' | 'verifySend' | 'verifyCheck' | 'register' | 'forgetPassword';
    phoneNumber?: string;
    token?: string;
    smsSentType: 'forgetPassword' | 'register' | '';
}

class User extends React.Component<IProps> {
    public state: IState = {
        showType: 'getNumberToCheck',
        smsSentType: ''
    };

    public render() {
        const { showType, phoneNumber, token, smsSentType } = this.state;
        return (
            <Modal
                title={lang.title[showType]}
                visible={true}
                onOk={this.props.onCancel}
                onCancel={this.props.onCancel}
                footer={null}
                className={'user-login-register-modal'}
            >
                {showType === 'getNumberToCheck' &&
                <GetNumber
                    onAvailableNumber={(pn: string) => this.setState({showType: 'login', phoneNumber: pn})}
                    onUnavailableNumber={(pn: string) => this.setState({showType: 'verifyCheck', smsSentType: 'register', phoneNumber: pn})}
                />}
                {showType === 'login' &&
                <Login
                    phoneNumber={phoneNumber}
                    closer={this.props.onCancel}
                    sendSmsToForgetPassword={() => this.setState({showType: 'verifyCheck', smsSentType: 'forgetPassword'})}
                />}
                {showType === 'verifyCheck' &&
                <NumberVerifyCheck
                    phoneNumber={phoneNumber}
                    onVerifyRegister={(Token: string) => this.setState({showType: 'register', token: Token})}
                    onVerifyForget={(Token: string) => this.setState({showType: 'forgetPassword', token: Token})}
                    type={smsSentType}
                />
                }
                {showType === 'register' && (
                    <Register
                        phoneNumber={phoneNumber}
                        token={token}
                        closer={this.props.onCancel}
                    />
                )}
                {showType === 'forgetPassword' && (
                    <ForgetPassword
                        phoneNumber={phoneNumber}
                        token={token}
                        closer={this.props.onCancel}
                    />
                )}
            </Modal>
        );
    }
}

export default User;
