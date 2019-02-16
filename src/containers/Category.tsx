import React from 'react';
import { Icon } from 'antd';
import Category from '../components/Category';

interface IState {
    loading: boolean;
}

interface IProps {
    match: any;
}

class CategoryContainer extends React.Component<IProps, IState> {
    public state = {loading: false};

    public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        if (prevProps.match.params.id !==  this.props.match.params.id) {
            this.setState({loading: true}, () => {
                this.setState({loading: false});
            });
        }
    }

    public render(){
        const { loading } = this.state;
        if (!loading) {
            return(<Category catId={this.props.match.params.id} />);
        } else {
            return(<Icon type="loading" />);
        }
    }
}

export default CategoryContainer;
