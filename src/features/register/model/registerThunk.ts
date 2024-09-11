import { createAsyncThunk } from '@reduxjs/toolkit'
import { postRegisterData } from 'shared/api/auth'
import { ErrorType, RejectedDataType } from 'shared/types'

export const fetchRegister = createAsyncThunk<
    any, // The type of the resolved data (can be adjusted based on API)
    { name: string; email: string; password: string }, 
    { rejectValue: RejectedDataType } 
>('user/fetchRegister', async (data, thunkAPI) => {
    try {
        const response = await postRegisterData(data) 
        console.log('response : ' + [...response])
        return response 
    } catch (err: unknown) {
        const knownError = err as ErrorType
        return thunkAPI.rejectWithValue({
            messageError: knownError.message,
            status: knownError.response?.status,
        })
    }
})
