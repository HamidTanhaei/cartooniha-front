import axios from 'axios';
import { video } from './apiRoutes';
export default class VideoApi {
    public get = async (videoId: number) => {
        return axios({
                         url: video.singleVideo(videoId),
                     });
    }
    public videosByMainCategory = async (videoId: number) => {
        return axios({
                         url: video.videosByMainCategory(videoId),
                     });
    }
}
