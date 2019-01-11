import axios from 'axios';

export default class HomeApi {
    public async get() {
        return axios({
            url: '/main_page',
        });
    }
}