import React from 'react';
import { Icon } from 'antd';
import { IVideoPage } from '../../interfaces/video';
import MovieComponent from '../../components/Video';
import VideoApi from '../../services/api/video';

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

    private getData = async (): Promise<void> => {
        try {
            const {data} = await this.videoApi.get(this.props.match.params.id);
            this.setState({loading: true}, () => {
                this.setState({pageData: data, loading: false});
            });
        } catch (e) {
            console.log('get video info error', e);
        }
    }
    public async componentDidMount() {
        this.getData();
    }

    public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        if (prevProps.match.params.id !==  this.props.match.params.id) {
            this.getData();
        }
    }

    public render() {
        if (!this.state.loading) {
            return(<MovieComponent {...this.state} />);
        } else {
            return(<Icon type="loading" />);
        }
    }
}

export default VideoContainer;
