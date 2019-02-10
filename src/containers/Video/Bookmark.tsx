import axios from 'axios';
import React from 'react';
import Bookmark from '../../components/Video/bookmark';
import * as api from '../../services/api/bookmark';

interface IProps {
    id: number;
    bookmarked: boolean;
}

interface IState {
    bookmarked: boolean;
    loading: boolean;
}

class BookmarkContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            bookmarked: props.bookmarked,
            loading: false
        };
    }

    public componentWillReceiveProps(nextProps: any) {
        this.setState({ bookmarked: nextProps.bookmarked });
    }

    public toggleBookmark = async () => {
        this.setState({loading: true}, async () => {
            try {
                if (this.state.bookmarked) {
                    await api.remove(this.props.id);
                    this.setState({bookmarked: false, loading: false});
                } else {
                    await api.add(this.props.id);
                    this.setState({bookmarked: true, loading: false});
                }
            } catch (e) {
                console.log(e);
                this.setState({loading: false});
            }
        });
    }

    public render() {
        return(<Bookmark onClick={this.toggleBookmark} bookmarked={this.state.bookmarked} loading={this.state.loading} />);
    }
}

export default BookmarkContainer;
