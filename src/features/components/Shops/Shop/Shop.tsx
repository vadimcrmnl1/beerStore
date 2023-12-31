import React from "react";
import s from 'features/components/Shops/Shop/Shop.module.css'
import {ShopType} from "features/components/Shops/Shops";
import emptyImage from 'common/images/empty_image.png'

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