import React from 'react';
import {
    Form, Button,
} from 'antd';
import { checkNumberAvailability } from '../../../services/api/user';
import { phoneFixer } from '../../../utils';
import { InputPhoneNumber } from '../../inputs/PhoneNumber';
import lang from './lang';
import './style.scss';

interface IProps {
    onAvailableNumber: any;
    onUnavailableNumber: any;
    form: any;
}

class GetNumber extends React.Component <IProps> {
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                try {
                    const phoneNumber = phoneFixer(values.phoneNumber);
                    const data = await checkNumberAvailability(phoneNumber);
                    if (data.data.available) {
                        this.props.onAvailableNumber(phoneNumber);
                    } else {
                        this.props.onUnavailableNumber(phoneNumber);
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
                <div className="message">
                    {lang.description.for} <span>{lang.description.login}</span> {lang.description.or} <span>{lang.description.register}</span> {lang.description.enterYourPhoneNumber}
                </div>
                <InputPhoneNumber getFieldDecorator={getFieldDecorator} />
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="full-button">
                        {lang.continue}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(GetNumber);
