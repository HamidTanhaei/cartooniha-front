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

export const list = async () => {
    return axios({
                     url: bookmarkApi.list,
                     method: 'get',
                 });
};
