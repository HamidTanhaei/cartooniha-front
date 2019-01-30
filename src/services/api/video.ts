import axios from 'axios';
import { apiVideoInfo, apiVideoOtherEpisodes } from './apiRoutes';
export default class VideoApi {
    public get = async (videoId: number) => {
        return axios({
                         url: apiVideoInfo(videoId),
                     });
    }
    public otherEpisodes = async (videoId: number) => {
        return axios({
                         url: apiVideoOtherEpisodes(videoId),
                     });
    }
}