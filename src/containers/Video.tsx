import React from 'react';
import { IVideoPage } from '../interfaces/video';
import MovieComponent from '../components/Video';
import VideoApi from '../services/api/video';

interface IMatchInterface {
    params: any;
}

interface IProps {
    match: IMatchInterface;
}

type IState = {
    loading: true;
} | {
    loading: false;
    pageData: IVideoPage;
};

class VideoContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    public videoApi = new VideoApi();
    public async componentDidMount() {
        try {
            const {data} = await this.videoApi.get(this.props.match.params.id);
            this.setState({pageData: data, loading: false});
        } catch (e) {
            console.log('get video info error', e);
        }
    }

    public render() {
        return(<MovieComponent {...this.state} />);
    }
}

export default VideoContainer;