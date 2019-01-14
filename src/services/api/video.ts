import axios from 'axios';
import { apiVideoInfo } from './apiRoutes';
export default class VideoApi {
    public get = async (videoId: number) => {
        return axios({
                         url: apiVideoInfo(videoId),
                     });
    }
}