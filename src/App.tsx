import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/Home';
import MovieContainer from './containers/Movie';
import './theme/static/css/bootstrap.css';

// config axios default URL
axios.defaults.baseURL = `${process.env.RAZZLE_APP_API_BASE_PATH}${process.env.RAZZLE_APP_API_VERSION}`;

const App = () => (
    <Switch>
        <Route exact={true} path="/" component={HomeContainer} />
        <Route exact={true} path="/movie/:id" component={MovieContainer} />
    </Switch>
);

export default App;