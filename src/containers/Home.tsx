import React from 'react';
import Home from '../components/Home';
import HomeApi from '../services/api/home';

interface State {
    homeData?: any;
}

class HomeContainer extends React.Component<any, State> {
    public state: State = {};
    private HomeApi = new HomeApi();

    public async componentDidMount() {
        const {data} = await this.HomeApi.get();
        this.setState({homeData: data});
    }

    public render() {
        const {homeData} = this.state;
        return (
            <Home {...homeData} />
        );
    }
}

export default HomeContainer;
