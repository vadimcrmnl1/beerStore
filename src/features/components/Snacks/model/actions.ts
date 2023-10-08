import {ProductType} from "common/components/Product/Product";

export const setProductOrderedAC = (ordered: boolean, id: string) => (
    {
        type: 'SNACKS/SET_PRODUCT_ORDERED',
        payload: {ordered, id}
    } as const
)

export const fetchSnacksAC = (toast: ProductType[], seafood: ProductType[], chips: ProductType[]) => ({
    type: 'SNACKS/FETCH_SNACKS',
    payload: {toast, seafood, chips}
} as const)
export const removeSnacksStateAC = () => ({
    type: 'SNACKS/REMOVE_SNACKS_STATE',
    payload: {}
} as const)