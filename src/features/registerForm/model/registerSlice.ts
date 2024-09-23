import { IRegisterState } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { fetchRegister, verifyCode } from './registerThunk'

const initialState: IRegisterState = {
    data: null,
    loading: false,
    error: null,
    isVerified: false,
    isRegistered: false,
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegister.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
                state.isRegistered = true
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.messageError ?? null
            })
            .addCase(verifyCode.fulfilled, (state, action) => {
                state.isVerified = action.payload
            })
            .addCase(verifyCode.rejected, (state, _) => {
                state.isVerified = false
            })
    },
})

export default registerSlice.reducer
