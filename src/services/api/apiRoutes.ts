export const apiMainPage = '/mainPage/';
export const apiVideoInfo = (videoId: any) => (`/video/${videoId}`);
export const apiVideoOtherEpisodes = (videoId: any) => (`/video/${videoId}/other-episodes`);

export const user = {
    checkNumberAvailability: '/user/check_number_availability',
    login:                   '/user/login',
    verifySend:              '/user/verify_number/send',
    verifyCheck:             '/user/verify_number/check',
    register:                '/user/register',
    forget_password:         '/user/forget_password'
};
