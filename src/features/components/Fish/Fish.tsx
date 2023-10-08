import React from "react";
import s from 'features/components/Shops/Shops.module.css'
import {ref, set} from 'firebase/database'
import {db} from "app/firebase";
import {v1} from "uuid";
import * as snacksImages from './../../../common/images/snacks/index'
import {ProductType} from "common/components/Product/Product";

const chips: ProductType[] = [
    {
        title: 'Чипси Pringles Hot&Spicy Гострі, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Sour Cream & Onion Сметана-цибуля, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Pringles Cheese Onion Сир-цибуля, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Pringles Cheese Сир, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Pringles Bacon Бекон, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Pringles Original Оригінал, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Pringles BBQ Барбекю, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Pringles Salt & Vinegar сіль та оцет, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },
    {
        title: 'Чипси Pringles Prawn Cocktail Коктейль з креветок, 165 г',
        image: snacksImages.pringles,
        description: 'Ідеальні скибочки унікальної форми😋\n' +
            'Чіпси Pringles чудово смакують як до пива, так і для додавання до салатів.',
        amount: 1,
        totalAmount: 1,
        price: 115,
        type: 'package',
        totalPrice: 115,
        id: v1(),
        manufacturer: '',
        ordered: false,
        brand: 'Pringles',
        category: 'chips'
    },

]

export const Fish: React.FC = () => {

    const writeToDatabase = () => {
        set(ref(db, `snacks/chips`), chips)
    }


    return (
        <div className={s.wrapper}>
            <div>
                <h2>Ріба</h2>
                <button onClick={writeToDatabase}>Add to DB</button>
            </div>
        </div>
    )
}