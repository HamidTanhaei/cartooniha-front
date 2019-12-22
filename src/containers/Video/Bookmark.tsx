import React from 'react';
import Bookmark from '../../components/Video/bookmark';
import * as api from '../../services/api/bookmark';
import { connect } from 'react-redux';
import { IUser } from '../../interfaces/user';
import { message } from 'antd';

interface IProps {
    id: number;
    bookmarked: boolean;
    user: IUser;
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
        if (!this.props.user.token) {
            console.log('here');
            message.warning('جهت افزودن به علاقه مندی ها ثبت نام کنید یا وارد شوید');
        } else {
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
    }

    public render() {
        return(
            <Bookmark
                onClick={this.toggleBookmark}
                bookmarked={this.state.bookmarked}
                loading={this.state.loading}
            />
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, null)(BookmarkContainer);
