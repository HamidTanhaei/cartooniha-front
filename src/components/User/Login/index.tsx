import React from 'react';
import {
    Form, Button
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../redux/user/action';
import { login, verifyNumberSend } from '../../../services/api/user';
import { InputPhoneNumber, InputPassword } from '../../inputs';
import lang from './lang';
import './style.scss';

interface IProps {
    phoneNumber: any;
    form: any;
    closer: any;
    login: any;
    sendSmsToForgetPassword: any;
}

interface IState {
    passwordError: boolean;
}

class GetNumber extends React.Component <IProps, IState> {
    public state: IState = {
        passwordError: false
    };
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                try {
                    const data = await login({phoneNumber: this.props.phoneNumber, password: values.password});
                    this.props.login(data.data);
                    this.props.closer();
                } catch (e) {
                    this.setState({passwordError: true});
                }
            }
        });
    }

    public handleForget = async () => {
        const {sendSmsToForgetPassword, phoneNumber} = this.props;
        try {
            await verifyNumberSend(phoneNumber);
            sendSmsToForgetPassword();
        } catch (e) {
            console.log(e);
        }
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-modal">
                <div className="message">
                    {lang.description}
                </div>
                {this.state.passwordError && (
                    <div className="password-error">
                        {lang.passwordError}
                    </div>
                    )
                }
                <InputPhoneNumber getFieldDecorator={getFieldDecorator} phoneNumber={this.props.phoneNumber} />
                <div className="password-field">
                    <InputPassword
                        getFieldDecorator={getFieldDecorator}
                        wrong={this.state.passwordError}
                        onType={() => this.setState({passwordError: false})}
                    />
                    <span className="forget-password" onClick={this.handleForget}>
                        {lang.forgetPassword}
                    </span>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="full-button">
                        {lang.continue}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (data: any) => {
            dispatch(actions.login(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(GetNumber));
