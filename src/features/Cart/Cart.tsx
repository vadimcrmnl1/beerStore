import React from "react";
import s from 'features/components/Shops/Shops.module.css'
import {useAppSelector} from "app/store";
import {selectProducts} from "features/Cart/model/selectors";
import {CartProduct} from "features/Cart/components/CartProduct/CartProduct";
import {CartWindow} from "features/Cart/components/CartWindow/CartWindow";
import {EmptyCart} from "features/Cart/components/EmptyCart/EmptyCart";

export const Cart: React.FC = () => {
    const products = useAppSelector(selectProducts)
    console.log('cart products', products)

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
                        <EmptyCart/>
                    }
                </div>
                {products.length !== 0 && <CartWindow/>}
            </div>

        </div>
    )
}
