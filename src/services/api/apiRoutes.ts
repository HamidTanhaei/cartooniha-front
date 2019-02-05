export const apiMainPage = '/mainPage/';
export const apiVideoInfo = (videoId: any) => (`/video/${videoId}`);
export const apiVideoOtherEpisodes = (videoId: any) => (`/video/${videoId}/other-episodes`);

export const user = {
    checkNumberAvailability: '/user/check_number_availability',
    login:                   '/login',
    verifySend:              '/verify_number/send',
    verifyCheck:             '/verify_number/check'
};
