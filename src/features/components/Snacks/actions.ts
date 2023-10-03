export const setProductOrderedAC = (ordered: boolean, id: string) => (
    {
        type: 'SNACKS_SET_PRODUCT_ORDERED',
        payload: {ordered, id}
    } as const
)
