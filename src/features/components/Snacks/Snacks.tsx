import {useAppSelector} from "app/store";
import {Product} from "common/components/Product/Product";
import s from 'features/components/Shops/Shops.module.css'
import {selectSnacks} from "features/components/Snacks/model/selectors";
import React from "react";


export const Snacks: React.FC = React.memo(() => {
    const snacks = useAppSelector(selectSnacks)

    return (
        <div className={s.wrapper}>
            <div className={s.titleBlock}>
                <h2>Грінки</h2>
            </div>
            <div className={s.container}>
                {snacks.toast.length !== 0 && snacks.toast.map((el, index) => {
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
                {snacks.seafood.length !== 0 && snacks.seafood.map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}/>
                })
                }
            </div>
            <div className={s.titleBlock}>
                <h2>Чипси</h2>
            </div>
            <div className={s.container}>
                {snacks.chips.length !== 0 && snacks.chips.map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}/>
                })
                }
            </div>
        </div>
    )
})
