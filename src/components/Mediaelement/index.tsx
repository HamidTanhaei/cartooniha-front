import React, { Component } from 'react';
// import hlsjs from 'hls.js';
import 'mediaelement';

// Import stylesheet and shims
import 'mediaelement/build/mediaelementplayer.min.css';
import 'mediaelement/build/mediaelement-flash-video.swf';

interface IState {
    player?: any;
}

export default class MediaElement extends Component <any, any> {

    public state: IState = {
        player: ''
    };

    public componentDidMount() {

        // @ts-ignore
        const {MediaElementPlayer} = global;

        if (!MediaElementPlayer) {
            return;
        }

        const options = Object.assign({}, JSON.parse(this.props.options), {
            // Read the Notes below for more explanation about how to set up the path for shims
            pluginPath: './static/media/',
            success: (media: any, node: any, instance: any) => this.success(media, node, instance),
            error: (media: any, node: any) => this.error(media, node)
        });

        // window.Hls = hlsjs; // defined in script loaded as a file in index.html
        const player = new MediaElementPlayer(this.props.id, options);
        this.setState({player});
    }

    public componentWillUnmount() {
        if (this.state.player) {
            this.state.player.remove();
            this.setState({player: null});
        }
    }

    public success(media: any, node: any, instance: any) {
        // Your action when media was successfully loaded
    }

    public error(media: any, node: any) {
        // Your action when media had an error loading
    }

    public render() {
        const props = this.props;
        const sources = JSON.parse(props.sources);
        const tracks = JSON.parse(props.tracks);
        const sourceTags = [];
        const tracksTags = [];

        for (let i = 0, total = sources.length; i < total; i++) {
            const source = sources[i];
            sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
        }

        for (let i = 0, total = tracks.length; i < total; i++) {
            const track = tracks[i];
            tracksTags.push(`<track src="${track.src}" kind="${track.kind}" srclang="${track.lang}"${(track.label ? ` label=${track.label}` : '')}>`);
        }

        const mediaBody = `${sourceTags.join('\n')}
				${tracksTags.join('\n')}`;
        const mediaHtml = props.mediaType === 'video' ?
            `<video id="${props.id}" width="${props.width}" height="${props.height}"${(props.poster ? ` poster=${props.poster}` : '')}
					${(props.controls ? ' controls' : '')}${(props.preload ? ` preload="${props.preload}"` : '')}>
					${mediaBody}
				</video>` :
            `<audio id="${props.id}" width="${props.width}" controls>
					${mediaBody}
				</audio>`;

        return (<div dangerouslySetInnerHTML={{__html: mediaHtml}} />);

    }
}
