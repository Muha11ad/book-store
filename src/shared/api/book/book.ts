import { apiInstance } from '../base'

import { IBookDescription } from './types'


export const getBook = (isbn13: string): Promise<IBookDescription> => {
    return apiInstance.get(`/${isbn13}`)
}
