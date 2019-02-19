import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { list as favoriteListApi } from '../../services/api/bookmark';
import VideoCard from '../VideoCard';
import Layout from '../common/SiteTemplate';
import './style.scss';

class Favorites extends React.Component {
    public state = {
        tracks: [],
        hasMoreItems: true,
        nextHref: null
    };

    public loadItems = (page: number) => {
        favoriteListApi({limit: 16 , offset: (page - 1) * 16}).then((res) => {
            const tracks: any = this.state.tracks;
            res.data.map((track: any) => {
                tracks.push(track.tasvir_cartoon);
            });

            this.setState({ tracks });
        }).catch((e) => {
            this.setState({ hasMoreItems: false });
        });
    }

    public render() {
        const loader = <div className="loader">Loading ...</div>;

        const items: any[] = [];
        this.state.tracks.map((video: any, i) => {
            items.push(
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3" key={i}>
                    <VideoCard data={video} />
                </div>
            );
        });

        return (
            <Layout HeadStyle="inner">
                <section className="innerpage-section2 category-component">
                    <div className="background">
                        <div className="container">
                            <div className="row">
                                <InfiniteScroll
                                    pageStart={0}
                                    loadMore={this.loadItems}
                                    hasMore={this.state.hasMoreItems}
                                    loader={loader}
                                >
                                    <div className="tracks">
                                        {items}
                                    </div>
                                </InfiniteScroll>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
export default Favorites;
