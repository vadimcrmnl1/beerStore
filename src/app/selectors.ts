import {AppRootStateType} from "app/store";

export const selectIsLoading = (state: AppRootStateType) => state.app.isLoading

