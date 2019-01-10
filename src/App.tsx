import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Movie from './routes/Movie';
import './static/css/bootstrap.css';

const App = () => (
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/movie" component={Movie} />
    </Switch>
);

export default App;