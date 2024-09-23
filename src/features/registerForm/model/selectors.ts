import { IRegisterState } from './types'
import { createSelector } from '@reduxjs/toolkit'

const selectBase = (state: RootState) => state.register

export const selectRegisterLoading = createSelector(
    selectBase,
    (state: IRegisterState) => state.loading
)

export const selectRegisterError = createSelector(
    selectBase,
    (state: IRegisterState) => state.error
)

export const selectRegisterData = createSelector(
    selectBase,
    (state: IRegisterState) => state.data
)

export const selectIsVerified = createSelector(
    selectBase,
    (state: IRegisterState) => state.isVerified
)
export const selectIsRegistered = createSelector(
    selectBase,
    (state: IRegisterState) => state.isRegistered
)
