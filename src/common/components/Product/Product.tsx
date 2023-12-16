import {useAppDispatch} from "app/store";
import {addProductAC} from "features/Cart/model/actions";
import {setProductOrderedAC} from "features/components/Snacks/model/actions";
import React from "react";
import {setDrinksOrderedAC} from "../../../features/components/Drinks/model/actions";
import s from './Product.module.css'

export const Product: React.FC<ProductType> = React.memo(({
                                                              id,
                                                              type,
                                                              alcohol,
                                                              amount,
                                                              density,
                                                              price,
                                                              image,
                                                              title,
                                                              description,
                                                              ordered,
                                                              totalPrice,
                                                              totalAmount,
                                                              category,
                                                              brand,
                                                              manufacturer
                                                          }) => {
    const dispatch = useAppDispatch()
    const handleAddProduct = () => {
        dispatch(addProductAC({id, title, description, price, amount, type, image, totalPrice, totalAmount}))
        dispatch(setProductOrderedAC(true, id))
        dispatch(setDrinksOrderedAC(true, id))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img src={image} alt={'product image'}/>
                <div className={s.titleBlock}>
                    <div className={s.title}>{title}</div>
                    {brand && <span className={s.description}>{category}, {brand}, {manufacturer}</span>}
                    {alcohol && <span className={s.description}>Alcohol: {alcohol}%</span>}
                </div>
                <div className={s.priceContainer}>
                    <div className={s.priceBlock}>
                        <span className={s.price}>{price}</span>
                        <span className={s.amount}>грн/{type === 'weight' ? '100г' : '1уп'}</span>
                    </div>
                    <div className={s.buttonBlock}>
                        {!ordered ?
                            <button onClick={handleAddProduct}
                                    className={`${s.link} + ' ' + ${s.pendingButton}`}>В кошик
                            </button> :
                            <button onClick={handleAddProduct} disabled={ordered}
                                    className={`${s.link} + ' ' + ${s.activeButton}`}>В кошику
                            </button>
                        }
                    </div>
                </div>
                <div className={s.hiddenDescriptionBlock}>{description}</div>
            </div>

        </div>
    )
})

export type ProductType = {
    id: string
    title: string
    description: string
    alcohol?: number
    density?: number
    price: number
    totalPrice: number
    amount: number
    totalAmount: number
    image?: string
    brand?: string
    manufacturer?: string
    type: 'weight' | 'package'
    category?: CategoryType
    ordered?: boolean


}
type CategoryType = 'toast' | 'seafood' | 'chips' | 'rum' | 'whiskey' | 'liquor' | 'cognac' | 'brandy' | 'vodka'
