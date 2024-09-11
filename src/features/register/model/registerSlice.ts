import { IRegisterState } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { fetchRegister } from './registerThunk'

const initialState: IRegisterState = {
    data: null,
    loading: false,
    error: null,
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
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.payload?.messageError ?? 'Registration failed'
            })
    },
})

export default registerSlice.reducer
