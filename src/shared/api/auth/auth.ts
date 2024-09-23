import { apiInstance } from '../base'
import { IUserRegister } from './types'

export const postVerifyCode = async (code: number): Promise<any> => {
    const hello = await apiInstance.post('/verify', {code})
    console.log(hello)
    return hello
}
export const postRegisterData = (data: IUserRegister): Promise<any> => {
    const hello = apiInstance.post('/register', data)
    return hello
}
export const postLoginData = (
    data: Omit<IUserRegister, 'name'>
): Promise<any> => {
    const helloAgain = apiInstance.post('/login', data)
    return helloAgain
}
