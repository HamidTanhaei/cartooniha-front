import { phoneFixer } from './index';

export const phoneNumberValid = (phoneNumber: string) => {
    phoneNumber = phoneFixer(phoneNumber); // => 989125777777
    return (phoneNumber.length === 12);
};
