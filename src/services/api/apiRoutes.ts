export const apiMainPage = '/mainPage/';

export const user = {
    checkNumberAvailability: '/user/check_number_availability',
    login:                   '/user/login',
    verifySend:              '/user/verify_number/send',
    verifyCheck:             '/user/verify_number/check',
    register:                '/user/register',
    forget_password:         '/user/forget_password'
};
export const video = {
    singleVideo:             (videoId: any) => (`/video/single/${videoId}`),
    otherEpisodes:           (videoId: any) => (`/video/${videoId}/other-episodes`),
};

export const bookmark = {
    add:                    (videoId: number) => `/bookmark/${videoId}`,
    remove:                 (videoId: number) => `/bookmark/${videoId}`,
    list:                   `/bookmark/list`
};

export const comment = {
    videoList:              (videoId: any) => (`/comment/video/${videoId}`),
    videoAdd:               (videoId: any) => (`/comment/video/${videoId}`),
};
