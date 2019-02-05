import React from 'react';
import {
    Form, Button,
} from 'antd';
import { checkNumberAvailability } from '../../../services/api/user';
import { phoneFixer } from '../../../utils';
import { InputPhoneNumber } from '../../inputs/PhoneNumber';
import './style.scss';

interface IProps {
    onAvailableNumber: any;
    onUnavailableNumber: any;
    form: any;
}

class GetNumber extends React.Component <IProps>{
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                try {
                    const data = await checkNumberAvailability(phoneFixer(values.phoneNumber));
                    if (data.data.available) {
                        this.props.onAvailableNumber();
                    } else {
                        this.props.onUnavailableNumber();
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="check-number-availability">
                برای ورود یا ثبت‌نام شماره تلفن همراه خود را وارد کنید
                <InputPhoneNumber getFieldDecorator={getFieldDecorator} />
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        ادامه
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(GetNumber);
