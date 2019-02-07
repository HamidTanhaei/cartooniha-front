import React from 'react';
import {
    Form, Button,
} from 'antd';
import { checkNumberAvailability, verifyNumberSend } from '../../../services/api/user';
import { phoneFixer } from '../../../utils';
import { InputPhoneNumber } from '../../inputs/PhoneNumber';
import lang from './lang';
import './style.scss';

interface IProps {
    onAvailableNumber: any;
    onUnavailableNumber: any;
    form: any;
}

interface IState {
    error: boolean;
}

class GetNumber extends React.Component <IProps, IState> {
    public state: IState = {
        error: false
    }
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                let checked = false;
                let available = false;
                const phoneNumber = phoneFixer(values.phoneNumber);
                try {
                    const data = await checkNumberAvailability(phoneNumber);
                    checked = true;
                    if (data.data.available) {
                        this.props.onAvailableNumber(phoneNumber);
                    } else {
                        available = true;
                    }
                } catch (e) {
                    console.log(e);
                }
                if (checked && available) {
                    try {
                        await verifyNumberSend(phoneNumber);
                        this.props.onUnavailableNumber(phoneNumber);
                    } catch (e) {
                        this.setState({error: true});
                    }
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
                {this.state.error && (
                    <div className="error">
                        {lang.verifySendError}
                    </div>
                )}
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
