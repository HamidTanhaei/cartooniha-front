import React from 'react';
import Home from '../components/Home';
import HomeApi from '../services/api/home';

interface State {
    homeData?: any;
}

class HomeContainer extends React.Component<any, State> {
    public state = {};
    private HomeApi = new HomeApi();

    public async componentDidMount() {
        const homeData = await this.HomeApi.get();
        this.setState({homeData});
    }

    public render() {
        const {homeData} = this.state;
        return (
            <Home data={homeData} />
        );
    }
}

export default HomeContainer;
