import React from 'react';
import { Modal } from 'antd';
import GetNumber from '../../components/User/GetNumber';

interface IProps {
    onCancel: any;
    onOk: any;
}

interface IState {
    showType: 'getNumberToCheck' | 'login' | 'verifySend' | 'verifyCheck' | 'register' | 'forgetPassword';
}

class User extends React.Component<IProps> {
    public state: IState = {
        showType: 'getNumberToCheck'
    };

    private title = {
        getNumberToCheck: 'ورود / عضویت',
        login: 'ورود',
        verifySend: 'بررسی شماره تلفن',
        verifyCheck: 'بررسی شماره تلفن',
        register: 'عضویت',
        forgetPassword: 'فراموشی کلمه عبور',
    }

    public render() {
        const { showType } = this.state;
        return (
            <Modal
                title={this.title[showType]}
                visible={true}
                onOk={() => this.props.onCancel()}
                onCancel={() => this.props.onCancel()}
                footer={null}
            >
                {showType === 'getNumberToCheck' &&
                <GetNumber
                    onAvailableNumber={() => this.setState({showType: 'login'})}
                    onUnavailableNumber={() => this.setState({showType: 'verifySend'})}
                />}
                {showType === 'login' && <p>Login</p>}
                {showType === 'verifySend' && <p>Verify Send</p>}
                {showType === 'verifyCheck' && <p>Verify Check</p>}
                {showType === 'register' && <p>Register</p>}
                {showType === 'forgetPassword' && <p>Or Forget Password</p>}
            </Modal>
        );
    }
}

export default User;
