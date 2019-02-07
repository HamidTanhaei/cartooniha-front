import axios from 'axios';
import { video } from './apiRoutes';
export default class VideoApi {
    public get = async (videoId: number) => {
        return axios({
                         url: video.singleVideo(videoId),
                     });
    }
    public otherEpisodes = async (videoId: number) => {
        return axios({
                         url: video.otherEpisodes(videoId),
                     });
    }
}
