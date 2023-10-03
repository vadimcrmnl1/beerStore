import React from "react";
import {Shop} from "features/Shops/Shop/Shop";
import s from './Shops.module.css'
import gaisin from './../../common/images/shops/gaisin.png'
import uman_kievskaya_4 from './../../common/images/shops/uman_kievskaya_4.png'
import christinovka from './../../common/images/shops/christinovka.png'
import uman_nezalezhnosti_73 from './../../common/images/shops/uman-nezalezhnosti-73.png'
import kiev from './../../common/images/shops/kiev1.png'
export const shops: ShopType[] = [
    {
        id: 11,
        city: "Умань",
        address: "Київська, 4",
        phone: '+380681515757',
        image: uman_kievskaya_4,
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 12,
        city: "Умань",
        address: "Європейська, 28Б",
        phone: '+380681515757',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 13,
        city: "Умань",
        address: "Незалежності, 73/2",
        phone: '+380671975757',
        image: uman_nezalezhnosti_73,
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 14,
        city: "Умань",
        address: "Незалежності, 9/8",
        phone: '+380730225444',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 15,
        city: "Христинівка",
        address: "Гагаріна, 9Д",
        phone: '',
        image: christinovka,
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 16,
        city: "Ладижин",
        address: "Будівельників, 11",
        phone: '+380632288822',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 17,
        city: "Монастирище",
        address: "Соборна",
        phone: '',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 18,
        city: "Гайсин",
        address: "Першотравнева, 52",
        phone: '+380732288822',
        image: gaisin,
        timeOfWork: '10:00 - 21:00',

    },
    {
        id: 19,
        city: "Жашків",
        address: "Шевченка, 6а",
        phone: '',
        image: '',
        timeOfWork: '10:00 - 21:00',
    },
    {
        id: 20,
        city: "Київ",
        address: "Мішуги, 3а",
        phone: '+380679225757',
        image: kiev,
        timeOfWork: '11:00 - 22:00',
    },
]

export type ShopType = {
    id: number
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
                {shops.map((el) => {
                        return <Shop key={el.id} id={el.id} city={el.city} address={el.address} phone={el.phone} image={el.image}
                                     timeOfWork={el.timeOfWork}/>
                    }
                )}
            </div>
        </div>
    )
}

