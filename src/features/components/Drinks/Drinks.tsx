import s from 'features/components/Shops/Shops.module.css'
import React from "react";
import {useAppSelector} from "../../../app/store";
import {Product} from "../../../common/components/Product/Product";
import {selectDrinks} from "./model/selectors";


export const Drinks: React.FC = React.memo(() => {
    const drinks = useAppSelector(selectDrinks)
    return (
        <div className={s.wrapper}>
            <div className={s.titleBlock}>
                <h2>Віскі</h2>
            </div>
            <div className={s.container}>
                {drinks.drinks.length !== 0 && drinks.drinks.filter(el => el.category === 'whiskey').map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}
                                    alcohol={el.alcohol} brand={el.brand} category={el.category}
                                    manufacturer={el.manufacturer}/>
                })}
            </div>
            <div className={s.titleBlock}>
                <h2>Бренді</h2>
            </div>
            <div className={s.container}>
                {drinks.drinks.length !== 0 && drinks.drinks.filter(el => el.category === 'brandy').map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}
                                    alcohol={el.alcohol} brand={el.brand} category={el.category}
                                    manufacturer={el.manufacturer}/>
                })}
            </div>
            <div className={s.titleBlock}>
                <h2>Коньяк</h2>
            </div>
            <div className={s.container}>
                {drinks.drinks.length !== 0 && drinks.drinks.filter(el => el.category === 'cognac').map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}
                                    alcohol={el.alcohol} brand={el.brand} category={el.category}
                                    manufacturer={el.manufacturer}/>
                })}
            </div>
            <div className={s.titleBlock}>
                <h2>Ром</h2>
            </div>
            <div className={s.container}>
                {drinks.drinks.length !== 0 && drinks.drinks.filter(el => el.category === 'rum').map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}
                                    alcohol={el.alcohol} brand={el.brand} category={el.category}
                                    manufacturer={el.manufacturer}/>
                })}
            </div>
            <div className={s.titleBlock}>
                <h2>Горілка</h2>
            </div>
            <div className={s.container}>
                {drinks.drinks.length !== 0 && drinks.drinks.filter(el => el.category === 'vodka').map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}
                                    alcohol={el.alcohol} brand={el.brand} category={el.category}
                                    manufacturer={el.manufacturer}/>
                })}
            </div>
            <div className={s.titleBlock}>
                <h2>Лікер</h2>
            </div>
            <div className={s.container}>
                {drinks.drinks.length !== 0 && drinks.drinks.filter(el => el.category === 'liquor').map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}
                                    alcohol={el.alcohol} brand={el.brand} category={el.category}
                                    manufacturer={el.manufacturer}/>
                })}
            </div>

        </div>
    )
})
