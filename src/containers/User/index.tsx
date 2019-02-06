import React from 'react';
import { Modal } from 'antd';
import GetNumber from '../../components/User/GetNumber';
import Login from '../../components/User/Login';
import lang from './lang';
import './style.scss';

interface IProps {
    onCancel: any;
    onOk: any;
}

interface IState {
    showType: 'getNumberToCheck' | 'login' | 'verifySend' | 'verifyCheck' | 'register' | 'forgetPassword';
    phoneNumber?: string;
}

class User extends React.Component<IProps> {
    public state: IState = {
        showType: 'getNumberToCheck'
    };

    public render() {
        const { showType, phoneNumber } = this.state;
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
                    onUnavailableNumber={(pn: string) => this.setState({showType: 'verifySend', phoneNumber: pn})}
                />}
                {showType === 'login' &&
                <Login phoneNumber={phoneNumber} closer={this.props.onCancel} />}
                {showType === 'verifySend' && <p>Verify Send</p>}
                {showType === 'verifyCheck' && <p>Verify Check</p>}
                {showType === 'register' && <p>Register</p>}
                {showType === 'forgetPassword' && <p>Or Forget Password</p>}
            </Modal>
        );
    }
}

export default User;
