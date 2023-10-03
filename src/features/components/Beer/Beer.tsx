import React from "react";
import {Product} from "common/components/Product/Product";
import s from './../Shops/Shops.module.css'

export const Beer: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.titleBlock}>
                <h2>Пиво</h2>
            </div>
            <div className={s.container}>

            </div>
        </div>
    )
}