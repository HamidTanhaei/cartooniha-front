import React from 'react';
import { Icon } from 'antd';
import RelatedVideos from '../../components/Video/RelatedVideos';
import TagApi from '../../services/api/tag';
import Loading from '../../components/Video/RelatedVideos/loading';

interface IProps {
    tags: string;
}

interface IState {
    loading: boolean;
    error: boolean;
    data?: any;
}

class RelatedVideosContainer extends React.Component<IProps, IState> {
    public state: IState = {
        loading: true,
        error: false,
    };
    private TagApi = new TagApi();
    public getData = async (): Promise<void> => {
        try {
            const data = await this.TagApi.videosByTags(this.props.tags);
            this.setState({loading: false, error: false, data: data.data});
        } catch (e) {
            this.setState({loading: false, error: true});
        }
    }
    public componentDidMount() {
        this.getData();
    }

    public render() {
        const { loading, error, data } = this.state;
        if (loading && !error) {
            return (new Array(10).fill(0).map((item) => (<Loading />)));
        } else if (error) {
                return 'error';
        } else {
            return (
                <RelatedVideos data={data} />
            );
        }
    }
}

export default RelatedVideosContainer;
