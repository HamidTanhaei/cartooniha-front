import axios from 'axios';
import { comment } from './apiRoutes';

interface ICommentAdd {
    videoId: number;
    text: string;
    replyId?: number;
}

export default class CommentApi {
    public commentList = async (videoId: number) => {
        return axios({
                         url: comment.videoList(videoId),
                     });
    }
    public commentAdd = async ({videoId, text, replyId = 0}: ICommentAdd) => {
        return axios({
                         method: 'post',
                         url: comment.videoAdd(videoId),
                         data: JSON.stringify({
                                                  text,
                                                  replyId
                                              })
                     });
    }
}
