import {appReducer} from "app/app.reducer";
import {AppActionTypes} from "app/types";
import {cartReducer} from "features/Cart/model/cart-reducer";
import {CartActionsType} from "features/Cart/model/types";
import {shopsReducer} from "features/components/Shops/model/shops.reducer";
import {ShopsActionTypes} from "features/components/Shops/model/types";
import {snacksReducer} from "features/components/Snacks/model/snacks-reducer";
import {SnacksActionTypes} from "features/components/Snacks/model/types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    cart: cartReducer,
    snacks: snacksReducer,
    shops: shopsReducer,
    app: appReducer
})
const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = legacy_createStore(rootReducer, composedEnhancers)

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionsType>
export type AllReducersActionsType = CartActionsType | SnacksActionTypes | ShopsActionTypes | AppActionTypes

// @ts-ignore
window.store = store
