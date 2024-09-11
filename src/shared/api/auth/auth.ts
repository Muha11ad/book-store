import { apiInstance } from '../base'
import { IUserRegister } from './types'

export const postRegisterData = (data: IUserRegister): Promise<any> => {
    const hello = apiInstance.post('/register', data)
    return hello
}
