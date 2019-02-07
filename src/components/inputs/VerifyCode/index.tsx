import {
    Form, Icon, Input,
} from 'antd';
import React from 'react';
import lang from './lang';

interface IProps {
    getFieldDecorator: any;
    wrong: boolean;
    onType: any;
}
interface IState {
    wrong: boolean;
    hello?: string;
}
export class InputVerifyCode extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const passwordFieldProps: any = {};
        const { wrong } = this.props;
        if (wrong) {
            passwordFieldProps.validateStatus = 'error';
        }
        return (
            <Form.Item
                hasFeedback={true}
                help={lang.help}
                {...passwordFieldProps}
            >
                {this.props.getFieldDecorator('code', {
                    rules: [{
                        len: 6,
                        required: true,
                        message: wrong ? lang.wrongPassMessage : lang.message,
                    }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.onType} placeholder={lang.help} />
                    // todo resend code
                )}
            </Form.Item>
        );
    }
}
