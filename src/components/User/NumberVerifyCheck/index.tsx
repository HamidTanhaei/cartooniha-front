import React from 'react';
import {
    Form, Button,
} from 'antd';
import { verifyNumberCheck } from '../../../services/api/user';
import { InputPhoneNumber, InputVerifyCode } from '../../inputs';
import lang from './lang';
import './style.scss';

interface IProps {
    phoneNumber: any;
    form: any;
    onVerifyRegister: any;
    onVerifyForget: any;
    type: 'forgetPassword' | 'register' | '';
}

interface IState {
    codeError: boolean;
}

class NumberVerifyCheck extends React.Component <IProps, IState> {
    public state: IState = {
        codeError: false
    };
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                try {
                    const data = await verifyNumberCheck({phoneNumber: this.props.phoneNumber, code: values.code});
                    if (this.props.type === 'register') {
                        this.props.onVerifyRegister(data.data.token);
                    } else if (this.props.type === 'forgetPassword') {
                        this.props.onVerifyForget(data.data.token);
                    }
                } catch (e) {
                    this.setState({codeError: true});
                }
            }
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-modal">
                <div className="message">
                    {lang.description}
                </div>
                {this.state.codeError && (
                    <div className="password-error">
                        {lang.codeError}
                    </div>
                    )
                }
                <InputPhoneNumber getFieldDecorator={getFieldDecorator} phoneNumber={this.props.phoneNumber} />
                <InputVerifyCode
                    getFieldDecorator={getFieldDecorator}
                    wrong={this.state.codeError}
                    onType={() => this.setState({codeError: false})}
                />
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="full-button">
                        {lang.continue}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(NumberVerifyCheck);
