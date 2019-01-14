import axios from 'axios';
import { apiMainPage } from './apiRoutes';

export default class HomeApi {
    public async get() {
        return axios({
            url: apiMainPage,
        });
    }
}