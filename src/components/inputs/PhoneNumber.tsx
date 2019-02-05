import {
    Form, Icon, Input,
} from 'antd';
import React from 'react';
import { phoneNumberValid } from '../../utils/validation';

export const InputPhoneNumber = (props: any) => (
    <Form.Item
        help="شماره همراه 11 رقمی"
        hasFeedback={true}
    >
        {props.getFieldDecorator('phoneNumber', {
            rules: [{
                required: true,
                message: 'شماره همراه را وارد کنید',
                validator: (rule: any, value: any, callback: any): any => {
                    if (phoneNumberValid(value)) {
                        callback();
                    } else {
                        callback('number is not valid');
                    }
                }
            }],
        })(
            <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="09xxxxxxxxx" />
        )}
    </Form.Item>
);
