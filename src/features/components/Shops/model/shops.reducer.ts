import {ShopType} from "features/components/Shops/Shops";
import {ShopsActionTypes} from "features/components/Shops/model/types";

export const shopsInitialState = {
    shops: [] as ShopType[]
}
export type ShopsInitialState = typeof shopsInitialState
export const shopsReducer = (state: ShopsInitialState = shopsInitialState, action: ShopsActionTypes): ShopsInitialState => {
    switch (action.type) {
        case 'SHOPS/FETCH_SHOPS':
            return {...state, shops: action.payload.shops}
        default:
            return state
    }
}