import React from 'react';
import { Modal, Button } from 'antd';




class User extends React.Component {
    public state = { visible: false };

    public showModal = () => {
        this.setState({
                          visible: true,
                      });
    }

    public handleOk = (e: any) => {
        this.setState({
                          visible: false,
                      });
    }

    public handleCancel = (e: any) => {
        this.setState({
                          visible: false,
                      });
    }

    public render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default User;
