import React from "react";
import s from './CartWindow.module.css'
import {useAppSelector} from "app/store";
import {selectProducts, selectTotalCartPrice} from "features/Cart/selectors";
import {ModalForm} from "common/components/ModalForm/ModalForm";

export const CartWindow: React.FC = () => {
    const totalCartPrice = useAppSelector(selectTotalCartPrice)
    const products = useAppSelector(selectProducts)


    return (
        <div className={s.wrapper}>
            <p>Ваше замовлення</p>
            <div className={s.container}>
                <span>Стоимость доставки в любую точку 50 грн</span>
                <span>Позицій у замовленні: {products.length}</span>
                <span>Сума замовлення: {totalCartPrice} грн</span>
                <ModalForm/>
                {/*<button className={s.buttonCheckout} onClick={handleCheckout}>Оформити замовлення</button>*/}
            </div>

        </div>
    )
}