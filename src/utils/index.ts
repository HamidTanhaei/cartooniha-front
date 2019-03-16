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
        return process.env.RAZZLE_APP_IMAGES_PATH + '/CartoonsImage/' + id + '/player.jpg';
    } catch (e) {
        console.log('getVideoImage error:', e);
        return '';
    }
};

export const getCategoryImage = (id: any): string => {
    try {
        return process.env.RAZZLE_APP_IMAGES_PATH + '/CatsImage/' + id + '/player-resized.jpg';
    } catch (e) {
        console.log('getCategoryImage error:', e);
        return '';
    }
};

export const getVideoPlayUrl = (id: any, type = 'webm'): string => {
    try {
        if (type === 'm3u8') {
            return process.env.RAZZLE_APP_STREAM_PATH + '/PlayFree/' + id + '/index.' + type;
        }
        return process.env.RAZZLE_APP_STREAM_PATH + '/PlayFree/' + id + '/video.' + type;
    } catch (e) {
        console.log('getVideoPlayUrl error:', e);
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

export function daysBetween(date1: any, date2: any) {
    const oneDay = 1000 * 60 * 60 * 24;
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();
    const differenceMs = date2Ms - date1Ms;
    return Math.round(differenceMs / oneDay);
}

export function elapsedTime(date1: any, date2: any) {
    const YEAR = 60 * 60 * 24 * 365;
    const MONTH = 60 * 60 * 24 * 30;
    const DAY = 60 * 60 * 24;
    const HOUR = 60 * 60;
    const MINUTE = 60;
    const SECOND = 1;
    const SPACE = ' ';

    const UNITS_IN_SECONDS = [YEAR, MONTH, DAY, HOUR, MINUTE, SECOND];
    const UNITS = ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه'];

    const date1Seconds = Math.floor(date1.getTime() / 1000);
    const date2Seconds = Math.floor(date2.getTime() / 1000);
    let diffInSec = Math.abs(date1Seconds - date2Seconds);

    const elapsed = [];

    for (let i = 0; i < UNITS_IN_SECONDS.length; i++) {
        elapsed[i] = Math.floor(diffInSec / UNITS_IN_SECONDS[i]);
        diffInSec = diffInSec - elapsed[i] * UNITS_IN_SECONDS[i];
    }

    let result;
    for (let i = 0; i < elapsed.length; i++) {
        if (elapsed[i] === 0) {
            continue;
        } else {
            result = elapsed[i] + SPACE + UNITS[i] + SPACE;
            break;
        }
    }
    return result;
}
