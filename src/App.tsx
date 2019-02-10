import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/Home';
import VideoContainer from './containers/Video';
import './theme/static/stylesheets/bootstrap.scss';
import './theme/antd/index.scss';
import './theme/global/index.scss';

// config axios default URL
axios.defaults.baseURL = `${process.env.RAZZLE_APP_API_BASE_PATH}${process.env.RAZZLE_APP_API_VERSION}`;

interface IProps {
    token?: string | undefined;
}

class App extends React.Component<IProps> {
    public state = {
        token: this.props.token,
    };

    constructor(props: IProps) {
        super(props);
        axios.defaults.headers.common.Authorization = `Bearer ${this.props.token}`;
    }

    public static getDerivedStateFromProps(nextProps: any, prevState: any) {
        if (nextProps.token !== prevState.token) {
            axios.defaults.headers.common.Authorization = `Bearer ${nextProps.token}`;
            return {
                token: nextProps.token,
            };
        }
        return null;
    }

    public render() {
        return(
            <Switch>
                <Route exact={true} path="/" component={HomeContainer} />
                <Route exact={true} path="/video/:id" component={VideoContainer} />
            </Switch>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        token: state.user.token,
    };
};

export default connect(mapStateToProps, undefined)(App);
