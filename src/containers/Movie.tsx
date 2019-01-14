import React from 'react';
import MovieComponent from '../components/Movie';

interface Props {
    hamid: string;
}

class MovieContainer extends React.Component<Props> {
    public render() {
        return(<MovieComponent />);
    }
}

export default MovieContainer;