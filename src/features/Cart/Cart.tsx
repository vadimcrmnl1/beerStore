import React from "react";
import s from 'features/components/Shops/Shops.module.css'
import {useAppSelector} from "app/store";
import {selectProducts} from "features/Cart/selectors";
import {CartProduct} from "common/components/CartProduct/CartProduct";
import {CartWindow} from "common/components/CartWindow/CartWindow";
import emptyCart from './../../common/images/empty_cart.png'

export const Cart: React.FC = () => {
    const products = useAppSelector(selectProducts)
    return (
        <div className={s.wrapper}>
            <div className={s.titleBlock}>
                <h2>Кошик</h2>
            </div>
            <div className={s.cartContainer}>
                <div className={s.productsBlock}>
                    {products.length ?
                        products.map(el => {
                            return <CartProduct key={el.id} id={el.id} description={el.description} title={el.title}
                                                image={el.image} amount={el.amount} price={el.price}
                                                totalAmount={el.totalAmount} totalPrice={el.totalPrice}
                                                type={el.type}/>
                        })
                        :
                        <div className={s.emptyContainer}><h3>Ваш кошик порожній. Будь ласка, виберіть щось у розділі
                            "Пиво", "Закуски", "Риба" або "Сувеніри"</h3>
                            <img src={emptyCart} alt={'empty cart'}/></div>
                    }
                </div>
                {products.length !== 0 && <CartWindow/>}
            </div>

        </div>
    )
}