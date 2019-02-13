import axios from 'axios';
import { tag } from './apiRoutes';

export default class TagApi {
    public videosByTags = async (tags: string, limit: number = 10, offset: number = 0) => {
        return axios({
                         url: tag.videosByTags(tags),
                     });
    }
}
