import React from "react";
import s from './CartProduct.module.css'
import {ProductType} from "common/components/Product/Product";
import {useAppDispatch} from "app/store";
import {decrementProductAC, incrementProductAC, removeProductAC} from "features/Cart/actions";
import {setProductOrderedAC} from "features/components/Snacks/actions";

export const CartProduct: React.FC<ProductType> = ({
                                                       id, image,
                                                       title, amount,
                                                       price, type, totalPrice, totalAmount
                                                   }) => {
    const dispatch = useAppDispatch()
    const handleRemoveProduct = () => {
        if (type === 'package' && totalAmount === 1 || type === 'weight' && totalAmount === 100) {
            dispatch(removeProductAC(id, price))
            dispatch(setProductOrderedAC(false, id))
        } else {
            dispatch(decrementProductAC(id, amount, price))
        }

    }
    const handleIncProduct = () => {
        dispatch(incrementProductAC(id, amount, price))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img src={image} alt={'product image'}/>
                <span className={s.title}>{title}</span>
                <span className={s.amount}>{totalAmount} {type === 'package' ? 'уп' : 'г'}</span>
                <span className={s.price}>{totalPrice} грн</span>
                <div className={s.buttonContainer}>
                    <div className={s.buttonBlock}>
                        <button onClick={handleRemoveProduct}> -</button>
                        <button onClick={handleIncProduct}> +</button>
                    </div>
                    {totalAmount === 1 && <span className={s.minAmount}>мінімальна кількість</span>}
                    {totalAmount === 100 && type === 'weight' && <span className={s.minAmount}>мінімальна кількість</span>}
                </div>

            </div>
        </div>
    )
}