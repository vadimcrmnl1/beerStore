import React, {useEffect} from "react";
import s from 'features/components/Shops/Shops.module.css'
import {Product} from "common/components/Product/Product";
import {useAppDispatch, useAppSelector} from "app/store";
import {selectChips, selectSeafood, selectToast} from "features/components/Snacks/model/selectors";
import {onValue, ref} from "firebase/database";
import {db} from "app/firebase";
import {fetchSnacksAC} from "features/components/Snacks/model/actions";
import {setAppIsLoadingAC} from "app/actions";
import {setOrderSentAC} from "features/Cart/model/actions";

export const Snacks: React.FC = React.memo(() => {
    const dispatch = useAppDispatch()
    const toast = useAppSelector(selectToast)
    const seaFoods = useAppSelector(selectSeafood)
    const chips = useAppSelector(selectChips)
    useEffect(() => {
        dispatch(setAppIsLoadingAC(true))
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            dispatch(fetchSnacksAC(data.snacks.toast, data.snacks.seafood, data.snacks.chips))
            dispatch(setAppIsLoadingAC(false))
            dispatch(setOrderSentAC(false))


        })
    }, [])
    return (
        <div className={s.wrapper}>
            <div className={s.titleBlock}>
                <h2>Грінки</h2>
            </div>
            <div className={s.container}>
                {toast.length !== 0 && toast.map((el, index) => {
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
                {seaFoods.length !== 0 && seaFoods.map((el, index) => {
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
                {chips.length !== 0 && chips.map((el, index) => {
                    return <Product key={index} id={el.id} title={el.title} description={el.description}
                                    price={el.price} amount={el.amount} type={el.type} image={el.image}
                                    ordered={el.ordered} totalAmount={el.totalAmount} totalPrice={el.totalPrice}/>
                })
                }
            </div>
        </div>
    )
})