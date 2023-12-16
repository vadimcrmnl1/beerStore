import {ProductType} from "../../../../common/components/Product/Product";
import {DrinksActionTypes} from "./types";

export const drinksInitialState = {
    drinks: [] as ProductType[]
}
export type DrinksInitialStateType = typeof drinksInitialState
export const drinksReducer = (state: DrinksInitialStateType = drinksInitialState, action: DrinksActionTypes): DrinksInitialStateType => {
    switch (action.type) {
        case 'DRINKS/FETCH_DRINKS':
            return {
                ...state,
                drinks: action.payload.drinks
            }
        case 'DRINKS/SET_PRODUCT_ORDERED':
            return {...state, drinks: state.drinks.map(el => el.id === action.payload.id ? {...el, ordered: action.payload.ordered} : el)}
        // case 'DRINKS/SET_PRODUCT_ORDERED':
        //     return {
        //         ...state,
        //         brandy: state.brandy.map(el => el.id === action.payload.id ? {
        //             ...el,
        //             ordered: action.payload.ordered
        //         } : el),
        //         whiskey: state.whiskey.map(el => el.id === action.payload.id ? {
        //             ...el,
        //             ordered: action.payload.ordered
        //         } : el),
        //         vodka: state.vodka.map(el => el.id === action.payload.id ? {
        //             ...el,
        //             ordered: action.payload.ordered
        //         } : el),
        //         rum: state.rum.map(el => el.id === action.payload.id ? {...el, ordered: action.payload.ordered} : el),
        //         liquor: state.liquor.map(el => el.id === action.payload.id ? {
        //             ...el,
        //             ordered: action.payload.ordered
        //         } : el),
        //         cognac: state.cognac.map(el => el.id === action.payload.id ? {
        //             ...el,
        //             ordered: action.payload.ordered
        //         } : el)
        //     }
        case 'DRINKS/REMOVE_DRINKS_STATE':
            return state
        default:
            return state
    }
}
