import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {CartActionsType} from "features/Cart/types";
import {cartReducer} from "features/Cart/cart-reducer";
import {snacksReducer} from "features/components/Snacks/snacks-reducer";
import {SnacksActionTypes} from "features/components/Snacks/types";

const rootReducer = combineReducers({
    cart: cartReducer,
    snacks: snacksReducer
})
const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)
// function saveToLocalStorage (state : AppRootStateType) {
//     try {
//         const serialisedState = JSON.stringify(state)
//         localStorage.setItem('persistantState', serialisedState)
//     } catch (e) {
//         console.warn(e)
//     }
// }
// function loadFromLocalStorage () {
//     try {
//         const serialisedState = localStorage.getItem('persistantState')
//         if (serialisedState === null) return undefined
//         return JSON.parse(serialisedState)
//     } catch (e) {
//         console.warn(e)
//         return undefined
//     }
// }
export const store = legacy_createStore(rootReducer, composedEnhancers)
// store.subscribe(() => saveToLocalStorage(store.getState()))



export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionsType>
export type AllReducersActionsType = CartActionsType | SnacksActionTypes

// @ts-ignore
window.store = store