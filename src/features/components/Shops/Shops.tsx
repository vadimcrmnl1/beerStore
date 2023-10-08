import React, {useEffect} from "react";

import {Shop} from "features/components/Shops/Shop/Shop";
import s from 'features/components/Shops/Shops.module.css'
import {useAppDispatch, useAppSelector} from "app/store";
import {selectShops} from "features/components/Shops/model/selectors";
import { onValue, ref } from "firebase/database";
import { db } from "app/firebase";
import { fetchShopsAC } from "./model/actions";
import {setOrderSentAC} from "features/Cart/model/actions";

export type ShopType = {
    id: string
    city: string
    address: string
    phone: string
    image?: string
    timeOfWork?: string
}

export const Shops: React.FC = () => {
    const dispatch = useAppDispatch()
    const shops = useAppSelector(selectShops)
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            dispatch(fetchShopsAC(data.shops))
        })
        dispatch(setOrderSentAC(false))

    }, [shops.length])
    return (
        <div className={s.wrapper}>
            <div className={s.titleBlock}>
                <h2>Магазині</h2>
            </div>
            <div className={s.container}>
                {shops.map(el => {
                        return <Shop key={el.id} id={el.id} city={el.city} address={el.address} phone={el.phone} image={el.image}
                                     timeOfWork={el.timeOfWork}/>
                    }
                )}
            </div>
        </div>
    )
}