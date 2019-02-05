import { phoneFixer } from './index';

export const phoneNumberValid = (phoneNumber: string) => {
    phoneNumber = phoneFixer(phoneNumber); // => 989125777777
    if (phoneNumber.length !== 12) {
        return false;
    }
    return true;
};
