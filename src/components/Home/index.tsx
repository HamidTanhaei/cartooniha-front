import React from 'react';
import Layout from '../common/SiteTemplate';
import JapanMovies from './JapanMovies';
import LastMovies from './LastMovies';
import NewAnimations from './NewAnimations';
import OldCartoons from './OldCartoons';
import UsersMostStars from './UsersMostStars';

interface Props {
    data: any;
}

class Index extends React.Component<Props>{
    public render() {
        console.log(this.props.data);
        return (
            <Layout HeadStyle="home" sliderData={this.props.data.slider}>
                <NewAnimations/>
                <OldCartoons />
                <UsersMostStars />
                <JapanMovies />
                <LastMovies />
            </Layout>
        );
    }
}

export default Index;
