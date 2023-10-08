import {ProductType} from "common/components/Product/Product";

import {SnacksActionTypes} from "features/components/Snacks/model/types";

export const snacksInitialState = {
    toast: [] as ProductType[],
    seafood: [] as ProductType[],
    chips: [] as ProductType[],
    corn: [] as ProductType[],
    peanut: [] as ProductType[],
    meat: [] as ProductType[],
}
export type SnacksInitialStateType = typeof snacksInitialState
export const snacksReducer = (state: SnacksInitialStateType = snacksInitialState, action: SnacksActionTypes): SnacksInitialStateType => {
    switch (action.type) {
        case 'SNACKS/FETCH_SNACKS':
            return {...state, toast: action.payload.toast, seafood: action.payload.seafood, chips: action.payload.chips}
         case 'SNACKS/SET_PRODUCT_ORDERED':
            return {
                ...state,
                toast: state.toast.map((el) => el.id === action.payload.id && el.type ? {
                    ...el,
                    ordered: action.payload.ordered
                } : el),
                seafood: state.seafood.map(el => el.id === action.payload.id && el.type ? {
                    ...el, ordered: action.payload.ordered
                } : el),
                chips: state.chips.map(el => el.id === action.payload.id && el.type ? {
                    ...el, ordered: action.payload.ordered
                } : el)
            }
        case 'SNACKS/REMOVE_SNACKS_STATE':
            return state
        default:
            return state
    }
}