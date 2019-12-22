import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Favorites from './components/Favorites';
import HomeContainer from './containers/Home';
import VideoContainer from './containers/Video';
import MainCategoryContainer from './containers/MainCategory';
import CategoryContainer from './containers/Category';
import './theme/static/stylesheets/bootstrap.scss';
import './theme/antd/index.scss';
import './theme/global/index.scss';
import Layout from './components/common/SiteTemplate';

// config axios default URL
axios.defaults.baseURL = `${process.env.RAZZLE_APP_API_BASE_PATH}${process.env.RAZZLE_APP_API_VERSION}`;

interface IProps {
    token?: string | undefined;
}

class Routes extends React.Component<IProps> {
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
            <React.Fragment>
                <Switch>
                    <Route exact={true} path="/" component={HomeContainer} />
                    <Layout HeadStyle="inner">
                        <Switch>
                            <Route exact={true} path="/video/:id" component={VideoContainer} />
                            <Route exact={true} path="/m-category/:id" component={MainCategoryContainer} />
                            <Route exact={true} path="/category/:id" component={CategoryContainer} />
                            <Route exact={true} path="/favorites" component={Favorites} />
                        </Switch>
                    </Layout>
                </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        token: state.user.token,
    };
};

const Application = connect(mapStateToProps, undefined)(Routes);

export default () => (
    <Switch>
        <Application />
    </Switch>
);
