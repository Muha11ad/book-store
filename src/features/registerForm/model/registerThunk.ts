import { createAsyncThunk } from '@reduxjs/toolkit'
import { ErrorType, RejectedDataType } from 'shared/types'
import { postRegisterData, postVerifyCode } from 'shared/api/auth'

export const fetchRegister = createAsyncThunk<
    any, // The type of the resolved data (can be adjusted based on API)
    { name: string; email: string; password: string },
    { rejectValue: RejectedDataType }
>('user/fetchRegister', async (data, thunkAPI) => {
    try {
        const response = await postRegisterData(data)
        return response
    } catch (err: unknown) {
        const knownError = err as ErrorType
        return thunkAPI.rejectWithValue({
            messageError: knownError.message,
            status: knownError.response?.status,
        })
    }
})

export const verifyCode = createAsyncThunk<
    any, // The type of the resolved data (can be adjusted based on API)
    { code: number },
    { rejectValue: RejectedDataType }
>('user/verifyCode', async (data, thunkAPI) => {
    try {
        const response = await postVerifyCode(data.code)
        return response
    } catch (err: unknown) {
        const knownError = err as ErrorType
        return thunkAPI.rejectWithValue({
            messageError: knownError.message,
            status: knownError.response?.status,
        })
    }
})
