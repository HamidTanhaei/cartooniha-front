import axios from 'axios';
import * as api from './apiRoutes';
import * as IF from './IUser';

export const checkNumberAvailability = async (phoneNumber: number | string) => {
    return axios({
                     url: api.user.checkNumberAvailability,
                     method: 'post',
                     data: JSON.stringify({phone_number: phoneNumber})
                 });
};

export const login = async ({phoneNumber, password}: IF.ILogin) => {
    return axios({
                     url: api.user.login,
                     method: 'post',
                     data: JSON.stringify({
                                              phone_number: phoneNumber,
                                              password
                                          }
                     )
                 });
};
export const verifyNumberSend = async (phoneNumber: string) => {
    return axios({
                     url: api.user.verifySend,
                     method: 'post',
                     data: JSON.stringify({
                                              phone_number: phoneNumber,
                                          }
                     )
                 });
};
export const verifyNumberCheck = async ({phoneNumber, code}: IF.IVerifyCheck) => {
    return axios({
                     url: api.user.verifyCheck,
                     method: 'post',
                     data: JSON.stringify({
                                              phone_number: phoneNumber,
                                              code
                                          }
                     )
                 });
};

export const register = async ({token, phoneNumber, firstName, lastName, password}: IF.IRegister) => {
    return axios({
                     url: api.user.register,
                     method: 'post',
                     data: JSON.stringify({
                                              token,
                                              phone_number: phoneNumber,
                                              first_name: firstName,
                                              last_name: lastName,
                                              password
                                          }
                     )
                 });
};

export const forgetPassword = async ({token, phoneNumber, newPassword}: IF.IForgetPassword) => {
    return axios({
                     url: api.user.forget_password,
                     method: 'put',
                     data: JSON.stringify({
                                              token,
                                              phone_number: phoneNumber,
                                              new_password: newPassword
                                          }
                     )
                 });
};
