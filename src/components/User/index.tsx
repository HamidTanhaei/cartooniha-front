import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../redux/sample/action';

interface IProp {
    onCancel: any;
}

class User extends React.Component<IProp> {
    public state = { visible: false };

    public handleOk = (e: any) => {
        this.setState({
                          visible: false,
                      });
    }

    public render() {
        return (
            <Modal
                title="Basic Modal"
                visible={true}
                onOk={this.handleOk}
                onCancel={() => this.props.onCancel()}
            >
                <p>Login</p>
                <p>Or Register</p>
                <p>Or Verify</p>
                <p>Or Forget Password</p>
            </Modal>
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
        inc: () => {
            dispatch(actions.increase());
        },
        dec: () => {
            dispatch(actions.decrease());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
