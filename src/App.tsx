import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/Home';
import VideoContainer from './containers/Video';
import './theme/static/stylesheets/bootstrap.scss';
import './theme/antd/index.scss';

// config axios default URL
axios.defaults.baseURL = `${process.env.RAZZLE_APP_API_BASE_PATH}${process.env.RAZZLE_APP_API_VERSION}`;

const App = () => (
    <Switch>
        <Route exact={true} path="/" component={HomeContainer} />
        <Route exact={true} path="/video/:id" component={VideoContainer} />
    </Switch>
);

export default App;
