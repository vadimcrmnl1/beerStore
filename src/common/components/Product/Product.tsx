import React from "react";
import s from './Product.module.css'
import {useAppDispatch} from "app/store";
import {addProductAC} from "features/Cart/actions";
import {setProductOrderedAC} from "features/components/Snacks/actions";


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
                                                              ordered, totalPrice, totalAmount
                                                          }) => {
    const dispatch = useAppDispatch()
    const handleAddProduct = () => {
        dispatch(addProductAC({id, title, description, price, amount, type, image, totalPrice, totalAmount}))
        dispatch(setProductOrderedAC(true, id))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img src={image} alt={'product image'}/>
                <p>{title}</p>
                <div className={s.descriptionBlock}>
                    {/*<div className={s.description}>{description}</div>*/}
                    <div className={s.description}></div>
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
    type: string
    category?: CategoryType
    ordered?: boolean


}
type CategoryType = 'toast' | 'seafood'
type ProductTypeForm = 'beer' | 'snack' | 'drink' | 'souvenir' | 'fish' | 'toast' | 'seafood' | 'package' | 'weight'