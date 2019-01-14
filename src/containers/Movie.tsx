import React from 'react';
import MovieComponent from '../components/Movie';
import VideoApi from '../services/api/video';

interface MatchInterface {
    params: any;
}

interface Props {
    match: MatchInterface;
}
interface State {
    loading: boolean;
    pageData?: any;
}

class MovieContainer extends React.Component<Props, State> {
    public state = {
        loading: true,
        pageData: null
    };
    public videoApi = new VideoApi();
    public async componentDidMount() {
        try {
            const {data} = await this.videoApi.get(this.props.match.params.id);
            this.setState({pageData: data});
        } catch (e) {
            console.log('get video info error', e);
        }
    }

    public render() {
        const {loading, pageData} = this.state;
        const props = {loading, pageData};
        return(<MovieComponent {...props} />);
    }
}

export default MovieContainer;