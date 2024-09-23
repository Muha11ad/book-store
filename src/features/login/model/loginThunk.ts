import { postLoginData } from 'shared/api/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ErrorType, RejectedDataType } from 'shared/types'

export const fetchLogin = createAsyncThunk<
    any, // The type of the resolved data (can be adjusted based on API)
    { email: string; password: string },
    { rejectValue: RejectedDataType }
>('user/fetchLogin', async (data, thunkAPI) => {
    try {
        const response = await postLoginData(data)
        return response
    } catch (err: unknown) {
        const knownError = err as ErrorType
        return thunkAPI.rejectWithValue({
            messageError: knownError.message,
            status: knownError.response?.status,
        })
    }
})
