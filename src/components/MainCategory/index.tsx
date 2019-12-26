import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import videoApi from '../../services/api/video';
import CategoryCard from '../CategoryCard';
import ItemLoading from '../CategoryCard/CategoryCardLoading';
import './style.scss';

interface IProps {
    catId: any;
}

class MainCategory extends React.Component<IProps> {
    public state = {
        tracks: [],
        hasMoreItems: true,
        nextHref: null
    };

    private videoApi = new videoApi();

    public loadItems = (page: number) => {
        const mainCatId = this.props.catId;
        this.videoApi.videosByMainCategory({mainCatId, limit: 16 , offset: (page - 1) * 16}).then((res) => {
            const tracks: any = [...this.state.tracks];
            res.data.map((track: any) => {
                tracks.push(track);
            });

            this.setState({ tracks });
        }).catch((e) => {
            this.setState({ hasMoreItems: false });
        });
    }

    public render() {
        const loader = new Array(4).fill(0).map((val, i) => (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3" key={i}>
                <ItemLoading />
            </div>
        ));

        const items: any[] = [];
        this.state.tracks.map((video: any) => {
            items.push(
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3" key={video.id}>
                    <CategoryCard data={video} />
                </div>
            );
        });

        return (
            <section className="innerpage-section2 main-category">
                <div className="background">
                    <div className="container">
                        <div className="row">
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={this.loadItems}
                                hasMore={this.state.hasMoreItems}
                                loader={loader}
                                useWindow={true}
                            >

                                <div className="tracks">
                                    {items}
                                </div>
                            </InfiniteScroll>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainCategory;
