import { IRegisterState } from './types' // Define IRegisterState type
import { createSelector } from '@reduxjs/toolkit'

const selectBase = (state: RootState) => state.register // Base selector for the registration state

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
    (state: IRegisterState) => state.data // Select the registered user data
)
