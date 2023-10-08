import {ShopType} from "features/components/Shops/Shops";

export const fetchShopsAC = (shops: ShopType[]) => ({
    type: 'SHOPS/FETCH_SHOPS',
    payload: {shops}
} as const)