import {AppRootStateType} from "app/store";

export const selectToast = (state: AppRootStateType) => state.snacks.toast
export const selectSeafood = (state: AppRootStateType) => state.snacks.seafood
export const selectChips = (state: AppRootStateType) => state.snacks.chips
export const selectProductOrdered = (state: AppRootStateType) => state.snacks.toast