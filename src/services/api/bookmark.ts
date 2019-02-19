import axios from 'axios';
import { bookmark as bookmarkApi } from './apiRoutes';

export const add = async (videoId: number) => {
    return axios({
                     url: bookmarkApi.add(videoId),
                     method: 'post',
                 });
};

export const remove = async (videoId: number) => {
    return axios({
                     url: bookmarkApi.remove(videoId),
                     method: 'delete',
                 });
};

export const list = async ({limit = 10, offset = 0}) => {
    return axios({
                     url: bookmarkApi.list,
                     method: 'get',
                     params: {
                         limit,
                         offset
                     }
                 });
};
