import React from 'react';
import PlaceHolderSrc from '../../theme/static/images/image-placeholder.png';

interface IState {
    error: boolean;
}

export default class ImgPlaceHolder extends React.Component <any, IState> {
    public state = {
        error: false
    };
    public render() {
        const {src, ...props} = this.props;
        const imageSrc = this.state.error ? PlaceHolderSrc : src;
        return (
            <img
                onError={() => this.setState({error: true})}
                src={imageSrc}
                {...props}
            />
        );
    }
}
