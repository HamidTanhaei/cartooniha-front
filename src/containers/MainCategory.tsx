import React from 'react';
import { Icon } from 'antd';
import MainCategory from '../components/MainCategory';

interface IState {
    loading: boolean;
}

interface IProps {
    match: any;
}

class MainCategoryContainer extends React.Component<IProps, IState> {
    public state = {loading: false};

    public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        if (prevProps.match.params.id !==  this.props.match.params.id) {
            this.setState({loading: true}, () => {
                this.setState({loading: false});
            });
        }
    }

    public render() {
        const { loading } = this.state;
        if (!loading) {
            return(<MainCategory catId={this.props.match.params.id} />);
        } else {
            return(<Icon type="loading" />);
        }
    }
}

export default MainCategoryContainer;
