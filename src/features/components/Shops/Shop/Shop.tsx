import React from "react";
import s from './Shop.module.css'
import kiev from './../../../common/images/shops/kiev1.png'
import {ShopType} from "features/Shops/Shops";
import emptyImage from './../../../common/images/empty_image.png'

export const Shop: React.FC<ShopType> = ({city, address, timeOfWork, image, phone}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img src={image ? image : emptyImage} alt={'shop'}/>
                <div className={s.addressBlock}>
                    <span className={s.city}>{city}</span>
                    <span className={s.street}>{address}</span>
                </div>

                <div className={s.descriptionBlock}>
                    <span>Режим роботи: {timeOfWork}</span>
                    <span>Телефон: {phone}</span>
                </div>
            </div>
        </div>
    )
}