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
