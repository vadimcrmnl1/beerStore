import {ProductType} from "common/components/Product/Product";
import {v1} from "uuid";
import * as snacksImages from './../../../common/images/snacks/index'

import {SnacksActionTypes} from "features/components/Snacks/types";

export const snacksInitialState = {
    toast: [
        {
            id: v1(),
            title: 'Грінки "Те, що треба!" з часником, 100г',
            type: "package",
            image: snacksImages.grenkiChesnok,
            description: 'Тонкі, майже як чіпси, рум’яні шматочки хліба, обсмажені з сіллю та спеціями на соняшниковій олії' +
                ' – універсальна хрумка закуска до пива і вдале доповнення до перших страв. Завдяки спеціальній тонкій нарізці,' +
                ' грінки безпечні для зубної емалі. Грінки з гострим присмаком хріну напевно оцінять любителі пряних страв з' +
                ' гарячим характером. Найбільш вдалу пару закуска складе з легкими лагерами.\n' +
                '\n' +
                'Склад: Хліб, олія соняшникова, сіль кухонна, спеції.',
            manufacturer: 'Те, що треба!',
            brand: 'Те, що треба!',
            amount: 1,
            totalAmount: 1,
            price: 50,
            totalPrice: 50,
            ordered: false
        },
        {
            id: v1(),
            title: 'Грінки "Те, що треба!" з паприкою, 100г',
            type: "package",
            image: snacksImages.grenkiPaprika,
            description: 'Тонкі, майже як чіпси, рум’яні шматочки хліба, обсмажені з сіллю та спеціями на соняшниковій олії' +
                ' – універсальна хрумка закуска до пива і вдале доповнення до перших страв. Завдяки спеціальній тонкій нарізці,' +
                ' грінки безпечні для зубної емалі. Грінки з гострим присмаком хріну напевно оцінять любителі пряних страв з' +
                ' гарячим характером. Найбільш вдалу пару закуска складе з легкими лагерами.\n' +
                '\n' +
                'Склад: Хліб, олія соняшникова, сіль кухонна, спеції.',
            manufacturer: 'Те, що треба!',
            brand: 'Те, що треба!',
            amount: 1,
            totalAmount: 1,
            price: 50,
            totalPrice: 50,
            ordered: false

        },
        {
            id: v1(),
            title: 'Грінки "Те, що треба!" з сиром та цибулею, 100г',
            type: "package",
            image: snacksImages.grenkiSirLuk,
            description: 'Тонкі, майже як чіпси, рум’яні шматочки хліба, обсмажені з сіллю та спеціями на соняшниковій олії' +
                ' – універсальна хрумка закуска до пива і вдале доповнення до перших страв. Завдяки спеціальній тонкій нарізці,' +
                ' грінки безпечні для зубної емалі. Грінки з гострим присмаком хріну напевно оцінять любителі пряних страв з' +
                ' гарячим характером. Найбільш вдалу пару закуска складе з легкими лагерами.\n' +
                '\n' +
                'Склад: Хліб, олія соняшникова, сіль кухонна, спеції.',
            manufacturer: 'Те, що треба!',
            brand: 'Те, що треба!',
            amount: 1,
            totalAmount: 1,
            price: 50,
            totalPrice: 50,
            ordered: false

        },
        {
            id: v1(),
            title: 'Грінки "Те, що треба!" з васаби, 100г',
            type: "package",
            image: snacksImages.grenkiVasabi,
            description: 'Тонкі, майже як чіпси, рум’яні шматочки хліба, обсмажені з сіллю та спеціями на соняшниковій олії' +
                ' – універсальна хрумка закуска до пива і вдале доповнення до перших страв. Завдяки спеціальній тонкій нарізці,' +
                ' грінки безпечні для зубної емалі. Грінки з гострим присмаком хріну напевно оцінять любителі пряних страв з' +
                ' гарячим характером. Найбільш вдалу пару закуска складе з легкими лагерами.\n' +
                '\n' +
                'Склад: Хліб, олія соняшникова, сіль кухонна, спеції.',
            manufacturer: 'Те, що треба!',
            brand: 'Те, що треба!',
            amount: 1,
            totalAmount: 1,
            price: 50,
            totalPrice: 50,
            ordered: false

        }
    ],
    seafood: [
        {
            id: v1(),
            title: 'Ікряник, соломка, 100г',
            type: "weight",
            image: snacksImages.ikryanikSolomka,
            description: 'В\'ялене м\'ясо риби та ікра, спресовані в тоненькі трубочки бордового кольору. Мають приємний аромат риби. Пружні за своєю структурою, є відмінною закускою до будь-яких сортам пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 86,
            totalPrice: 86,
            ordered: false
        },
        {
            id: v1(),
            title: 'Кальмар, кильца, 100г',
            type: "weight",
            image: snacksImages.kalmarKolca,
            description: 'Знайомий смак стружки сушеного кальмара - улюблена закуска шанувальників якісного пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 74,
            totalPrice: 74,
            ordered: false
        },
        {
            id: v1(),
            title: 'Кальмар у кунжуті, 100г',
            type: "weight",
            image: snacksImages.kalmarKunzhut,
            description: 'Знайомий смак стружки сушеного кальмара - улюблена закуска шанувальників якісного пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 74,
            totalPrice: 74,
            ordered: false
        },
        {
            id: v1(),
            title: 'Кальмар перуанський, 100г',
            type: "weight",
            image: snacksImages.kalmarPeruanskiy,
            description: 'Знайомий смак стружки сушеного кальмара - улюблена закуска шанувальників якісного пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 76,
            totalPrice: 76,
            ordered: false
        },
        {
            id: v1(),
            title: 'Креветка канадська, 100г',
            type: "weight",
            image: snacksImages.krevetkaCanada,
            description: 'Найсмачнише лакомство до пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 42,
            totalPrice: 42,
            ordered: false
        },
        {
            id: v1(),
            title: 'Кальмар лангустин, 100г',
            type: "weight",
            image: snacksImages.krevetkaLangustin,
            description: 'Найсмачнише лакомство до пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 46,
            totalPrice: 46,
            ordered: false
        },
        {
            id: v1(),
            title: 'Кальмар черноморська, 100г',
            type: "weight",
            image: snacksImages.krevetkaChernomorskaya,
            description: 'Найсмачнише лакомство до пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 36,
            totalPrice: 36,
            ordered: false
        },
        {
            id: v1(),
            title: 'Кальмар, павутинка, 100г',
            type: "weight",
            image: snacksImages.pautinka,
            description: 'Знайомий смак стружки сушеного кальмара - улюблена закуска шанувальників якісного пива.',
            manufacturer: '',
            brand: '',
            amount: 100,
            totalAmount: 100,
            price: 78,
            totalPrice: 78,
            ordered: false
        },
    ],
    chips: [] as ProductType[],
    corn: [] as ProductType[],
    peanut: [] as ProductType[],
    meat: [] as ProductType[],
}
export type SnacksInitialStateType = typeof snacksInitialState
export const snacksReducer = (state: SnacksInitialStateType = snacksInitialState, action: SnacksActionTypes): SnacksInitialStateType => {
    switch (action.type) {
        case 'SNACKS_SET_PRODUCT_ORDERED':
            return {
                ...state,
                toast: state.toast.map((el) => el.id === action.payload.id && el.type ? {
                    ...el,
                    ordered: action.payload.ordered
                } : el),
                seafood: state.seafood.map(el => el.id === action.payload.id && el.type ? {
                    ...el, ordered: action.payload.ordered
                } : el)
            }
        default:
            return state
    }
}