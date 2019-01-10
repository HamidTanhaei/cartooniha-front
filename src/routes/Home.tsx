import React from 'react';
import Layout from '../components/common/SiteTemplate';
import JapanMovies from '../components/routes/home/JapanMovies';
import LastMovies from '../components/routes/home/LastMovies';
import NewAnimations from '../components/routes/home/NewAnimations';
import OldCartoons from '../components/routes/home/OldCartoons';
import UsersMostStars from '../components/routes/home/UsersMostStars';

const Home = () => (<Layout HeadStyle="home">
    <NewAnimations />
    <OldCartoons />
    <UsersMostStars />
    <JapanMovies />
    <LastMovies />
</Layout>);

export default Home;
