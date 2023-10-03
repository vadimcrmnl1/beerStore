import React from "react";
import {v1} from 'uuid'

import {Shop} from "features/components/Shops/Shop/Shop";
import s from 'features/components/Shops/Shops.module.css'

import * as images from './../../../common/images/shops/index'

export const shops: ShopType[] = [
    {
        id: v1(),
        city: "Умань",
        address: "Київська, 4",
        phone: '+380681515757',
        image: images.uman_kievskaya,
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Умань",
        address: "Європейська, 28Б",
        phone: '+380681515757',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Умань",
        address: "Незалежності, 73/2",
        phone: '+380671975757',
        image: images.uman_nezaleznosti,
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Умань",
        address: "Незалежності, 9/8",
        phone: '+380730225444',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Христинівка",
        address: "Гагаріна, 9Д",
        phone: '',
        image: images.hristinovka,
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Ладижин",
        address: "Будівельників, 11",
        phone: '+380632288822',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Монастирище",
        address: "Соборна",
        phone: '',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Гайсин",
        address: "Першотравнева, 52",
        phone: '+380732288822',
        image: images.gaisin,
        timeOfWork: '10:00 - 21:00',

    },
    {
        id: v1(),
        city: "Жашків",
        address: "Шевченка, 6а",
        phone: '',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: v1(),
        city: "Київ",
        address: "Мішуги, 3а",
        phone: '+380679225757',
        image: images.kiev,
        timeOfWork: '11:00 - 22:00',
    },
    {
        id: v1(),
        city: "Голованівськ",
        address: "Ринкова, 1а",
        phone: '+380679225757',
        image: images.golovanivsk,
        timeOfWork: '10:00 - 21:00',
    },
]

export type ShopType = {
    id: string
    city: string
    address: string
    phone: string
    image?: string
    timeOfWork?: string
}

export const Shops: React.FC = () => {
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

