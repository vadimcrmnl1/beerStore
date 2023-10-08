import st from "common/components/ModalForm/ModalForm.module.css";
import * as React from "react";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {useAppDispatch, useAppSelector} from "app/store";
import {selectShops} from "features/components/Shops/model/selectors";
import {onValue, ref} from "firebase/database";
import {db} from "app/firebase";
import {fetchShopsAC} from "features/components/Shops/model/actions";
import {ProductType} from "common/components/Product/Product";
import {removeCartAC, setOrderSentAC} from "features/Cart/model/actions";
import {removeSnacksStateAC} from "features/components/Snacks/model/actions";
import {setAppIsLoadingAC} from "app/actions";

type FormData = {
    name: string
    phone: number
    address: string
    comment?: string
    totalPrice: number
    shop: string
    products: string[]
}
type FormPropsType = {
    setOpen: (open: boolean) => void
    products: ProductType[]
    totalCartPrice: number
}
export const Form: React.FC<FormPropsType> = ({setOpen, products, totalCartPrice}) => {
    const dispatch = useAppDispatch()

    const shops = useAppSelector(selectShops)

    const {
        register,
        setValue,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>()

    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            console.log(data)
            dispatch(fetchShopsAC(data.shops))
        })

    }, [shops.length])

    const onSubmit = (data: FormData, e: any) => {
        e.preventDefault()
        dispatch(setAppIsLoadingAC(true))
        setOpen(false)
        emailjs.sendForm('service_bd4iw0b', 'template_h4api22', e.target, '2gFQR1rMn1j28Vvml')
            .then((res) => {
                if (res.status === 200) {
                    dispatch(setOrderSentAC(true))
                    dispatch(removeCartAC([], 0, 50))
                    dispatch(removeSnacksStateAC())
                }
            })
            .catch(rej => {
                console.error(rej)
            })
            .finally(() => {
                dispatch(setAppIsLoadingAC(false))
            })

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={st.formContainer}>
            <select className={st.inputForm} {...register('shop', {required: true})}>
                {shops.length && shops.map((el, index) => {
                    return <option key={index}
                                   value={el.city + ' ' + el.address}>{el.city + ', ' + el.address}</option>
                })}
            </select>
            <input className={st.inputForm} placeholder={'Ваше ім\'я'} {...register('name', {
                required: true,
                maxLength: 80,
                minLength: 2
            })}/>
            {errors.name && <span style={{fontSize: '12px', color: 'red'}}>Будь ласка, введіть ім'я</span>}
            <input className={st.inputForm} type={'tel'} pattern={"+380[0-9]{2}-[0-9]{7}"} maxLength={12}
                   placeholder={'Ваш телефон'} {...register('phone', {
                required: true,
                minLength: 10,
                maxLength: 12
            })}/>
            {errors.phone && <span style={{fontSize: '12px', color: 'red'}}>Будь ласка, введіть номер телефону через '380'</span>}
            <input className={st.inputForm} placeholder={'Адреса доставки'} {...register('address', {
                required: true,
                minLength: 3, maxLength: 40
            })}/>
            {errors.address &&
                <span style={{fontSize: '12px', color: 'red'}}>Будь ласка, введіть адресу доставки</span>}
            <input className={st.inputForm}
                   placeholder={'Коментар для співробітників'} {...register('comment')}/>
            <input hidden={true} {...register('products')}/>
            <input hidden={true} {...register('totalPrice')}/>
            <button type={'submit'} onClick={() => {
                setValue('products', products.map(el => el.title + ' ' + el.totalAmount + ' уп(грам)'));
                setValue('totalPrice', totalCartPrice)
            }}>
                Відправити замовлення
            </button>
        </form>
    )
}