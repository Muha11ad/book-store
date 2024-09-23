import { ILoginState } from './types'
import { fetchLogin } from './loginThunk'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ILoginState = {
    data: null,
    loading: false,
    error: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.messageError ?? null
            })
    },
})

export default loginSlice.reducer
