import React from 'react';
import Layout from '../common/SiteTemplate';
import JapanMovies from './JapanMovies';
import LastMovies from './LastMovies';
import NewAnimations from './NewAnimations';
import OldCartoons from './OldCartoons';
import UsersMostStars from './UsersMostStars';

interface IProps {
    slider?: any;
    lastCartoons?: any;
    lastAnimations?: any;
    lastAnimes?: any;
    topVideoVisits?: any;
}

class Index extends React.Component<IProps> {
    public render() {
        const { slider, lastCartoons, lastAnimations, lastAnimes, topVideoVisits } = this.props;
        return (
            <Layout HeadStyle="home" sliderData={slider}>
                <NewAnimations data={lastAnimations} />
                <OldCartoons data={lastCartoons} />
                <UsersMostStars />
                <JapanMovies data={lastAnimes} />
                <LastMovies data={topVideoVisits} />
            </Layout>
        );
    }
}

export default Index;
