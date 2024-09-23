import { ILoginState } from './types'
import { createSelector } from '@reduxjs/toolkit'

const selectBase = (state: RootState) => state.login

export const selectLoginLoading = createSelector(
    selectBase,
    (state: ILoginState) => state.loading
)

export const selectLoginError = createSelector(
    selectBase,
    (state: ILoginState) => state.error
)

export const selectLoginData = createSelector(
    selectBase,
    (state: ILoginState) => state.data
)
