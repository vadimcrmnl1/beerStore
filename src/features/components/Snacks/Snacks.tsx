import React from "react";
import s from 'features/components/Shops/Shops.module.css'
import {Product} from "common/components/Product/Product";
import {useAppSelector} from "app/store";
import {selectSeafood, selectToast} from "features/components/Snacks/selectors";

export const Snacks: React.FC = React.memo(() => {
    const toast = useAppSelector(selectToast)
    const seaFoods = useAppSelector(selectSeafood)
    return (
        <div className={s.wrapper}>
            <div className={s.titleBlock}>
                <h2>Грінки</h2>
            </div>
            <div className={s.container}>
                {toast.length && toast.map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}/>
                })
                }
            </div>
            <div className={s.titleBlock}>
                <h2>Морепродукті</h2>
            </div>
            <div className={s.container}>
                {seaFoods.length && seaFoods.map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}/>
                })
                }
            </div>
        </div>
    )
})