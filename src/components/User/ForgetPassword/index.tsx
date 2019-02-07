import React from 'react';
import {
    Form, Button, Input, Icon
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../redux/user/action';
import { forgetPassword } from '../../../services/api/user';
import { phoneNumberValid } from '../../../utils/validation';
import lang from './lang';
import './style.scss';

interface IProps {
    phoneNumber: any;
    token: any;
    form: any;
    closer: any;
    login: any;
}

interface IState {
    passwordError: boolean;
    password: string;
}

class ForgetPassword extends React.Component <IProps, IState> {
    public state: IState = {
        passwordError: false,
        password: ''
    };
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                // check passwords match
                try {
                    const data = await forgetPassword({
                                                    token: this.props.token,
                                                    phoneNumber: this.props.phoneNumber,
                                                    newPassword: values.password
                                                });
                    this.props.login(data.data);
                    this.props.closer();
                } catch (e) {
                    this.setState({passwordError: true});
                }
            }
        });
    }

    public render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-modal">
                <div className="message">
                    {lang.description}
                </div>
                <Form.Item
                    hasFeedback={true}
                    help={lang.password}
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: lang.password,
                            min: 6
                        }
                        ],
                    })(
                        <Input type="password" prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} onBlur={(e) => this.setState({password: e.target.value})} placeholder={lang.password} />
                    )}
                </Form.Item>
                <Form.Item
                    hasFeedback={true}
                    help={lang.repassword}
                >
                    {getFieldDecorator('repassword', {
                        rules: [{
                            required: true,
                            message: lang.repassword,
                            validator: (rule: any, value: any, callback: any): any => {
                                if (value === this.state.password) {
                                    callback();
                                } else {
                                    callback('passwords are not match');
                                }
                            }
                        }
                        ],
                    })(
                        <Input type="password" prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder={lang.repassword} />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="full-button">
                        {lang.save}
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ForgetPassword));
