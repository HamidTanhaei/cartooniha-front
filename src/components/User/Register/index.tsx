import React from 'react';
import {
    Form, Button, Input, Icon
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../redux/user/action';
import { register } from '../../../services/api/user';
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
}

class Register extends React.Component <IProps, IState> {
    public state: IState = {
        passwordError: false
    };
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                try {
                    const data = await register({
                                                    token: this.props.token,
                                                    phoneNumber: this.props.phoneNumber,
                                                    firstName: values.fname,
                                                    lastName: values.lname,
                                                    password: values.password,
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
                    help={lang.fname}
                    {...getFieldDecorator}
                >
                    {getFieldDecorator('fname', {
                        rules: [{
                            min: 3,
                            required: true,
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />} placeholder={lang.fname}/>

                    )}
                </Form.Item>
                <Form.Item
                    hasFeedback={true}
                    help={lang.lname}
                    {...getFieldDecorator}
                >
                    {getFieldDecorator('lname', {
                        rules: [{
                            min: 3,
                            required: true,
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder={lang.lname} />

                    )}
                </Form.Item>
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
                        <Input type="password" prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder={lang.password} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Register));
