import {
    Form, Icon, Input,
} from 'antd';
import React from 'react';
import { phoneNumberValid } from '../../../utils/validation';
import lang from './lang';

export const InputPhoneNumber = (props: any) => {
    const options: any = {
        rules: [{
            required: true,
            message: lang.message,
            validator: (rule: any, value: any, callback: any): any => {
                if (phoneNumberValid(value)) {
                    callback();
                } else {
                    callback('number is not valid');
                }
            }
        }]
    };
    if (props.phoneNumber) {
        options.initialValue = props.phoneNumber;
    }
    return (
        <Form.Item
            help={lang.help}
            hasFeedback={true}
        >
            {props.getFieldDecorator('phoneNumber', options)(
                <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} disabled={!!props.phoneNumber} placeholder="09xxxxxxxxx" />
            )}
        </Form.Item>
    );
};
