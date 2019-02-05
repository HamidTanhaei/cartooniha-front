export interface ILogin {
    phoneNumber: number;
    password: string;
}
export interface IRegister {
    token: string;
    phoneNumber: number;
    firstName: string;
    lastName: string;
    password: string;
}

export interface IVerifyCheck {
    phoneNumber: number;
    code: number;
}

export interface IForgetPassword {
    token: string;
    phoneNumber: number;
    newPassword: string;
}
