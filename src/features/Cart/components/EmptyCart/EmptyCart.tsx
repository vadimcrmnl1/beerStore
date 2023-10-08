import s from "features/components/Shops/Shops.module.css";
import emptyCart from "common/images/empty_cart.png";
import React from "react";
import {useAppSelector} from "app/store";
import {selectOrderSent} from "features/Cart/model/selectors";

export const EmptyCart = () => {
    const orderSent = useAppSelector(selectOrderSent)

    return (
        <div className={s.emptyContainer}>
            {orderSent ?
                <>
                    <h3>Ваше замовлення надіслано</h3>
                    <p>Дякую за замовлення! Найближчим часом з Вами зв'яжуться наші співробітники</p></>
                :
                <>
                    <h3>Ваш кошик порожній. Будь ласка, виберіть щось у розділі
                        "Пиво", "Закуски", "Риба" або "Сувеніри"</h3>
                    <img src={emptyCart} alt={'empty cart'}/>
                </>
            }
        </div>
    )
}