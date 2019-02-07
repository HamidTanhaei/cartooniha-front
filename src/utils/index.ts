import { default as persianJs } from './library/persian';
export const getVideoName = (data: any): string => {
    try {
        if (!data) {
            return '';
        }
        const episodName: string = data.name ? data.name : data.enname;
        return episodName;
    } catch (e) {
        console.log('getVideoName Error', e);
        return '';
    }
};

export const getVideoEpisodeNumber = (data: any): string => {
    try {
        if (!data || !data.customorder) {
            return '';
        }
        // @ts-ignore
        return 'اپیزود ' + (persianJs(data.customorder).digitsToWords()._str);
    } catch (e) {
        console.log('getVideoEpisodeNumber error:', e);
        return '';
    }
};

export const getVideoImage = (id: any): string => {
    try {
        return process.env.RAZZLE_APP_IMAGES_PATH + '/CartoonsImage/' + id + '/player-493x301.jpg';
    } catch (e) {
        console.log('getVideoImage error:', e);
        return '';
    }
};

export const PersianJs = persianJs;

export const phoneFixer = (phoneNumber: string): string => {
    if (phoneNumber) {
        // @ts-ignore
        phoneNumber = persianJs(phoneNumber).toEnglishNumber();
    }
    phoneNumber = `${phoneNumber}`;
    if (phoneNumber[0] === '0') {
        phoneNumber = phoneNumber.substr(1);
    }
    if (phoneNumber.substr(0, 2) === '98') {
        return phoneNumber;
    } else {
        return `98${phoneNumber}`;
    }
};
