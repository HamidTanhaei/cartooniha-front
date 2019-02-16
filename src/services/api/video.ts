import axios from 'axios';
import { video } from './apiRoutes';
import { ICategory, IMainCategory } from './IVideo';

export default class VideoApi {
    public get = async (videoId: number) => {
        return axios({
                         url: video.singleVideo(videoId),
                     });
    }
    public videosByMainCategory = async ({mainCatId, limit = 10, offset = 0}: IMainCategory) => {
        return axios({
                         url: video.videosByMainCategory(mainCatId),
                         params: {
                             limit,
                             offset
                         }
                     });
    }
    public videosByCategory = async ({catId, limit = 10, offset = 0}: ICategory) => {
        return axios({
                         url: video.videosByCategory(catId),
                         params: {
                             limit,
                             offset
                         }
                     });
    }
}
