import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from './../CartWindow/CartWindow.module.css'
import st from './ModalForm.module.css'
import {useAppSelector} from "app/store";
import {selectProducts, selectTotalCartPrice} from "features/Cart/selectors";
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser'
import {shops} from "features/components/Shops/Shops";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 3,
};
type FormData = {
    name: string
    phone: number
    address: string
    comment: string
    totalPrice: number
    shop: string
    products: any
}

export const ModalForm: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const products = useAppSelector(selectProducts)
    const totalCartPrice = useAppSelector(selectTotalCartPrice)

    const {
        register,
        setValue,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>()

    const sendEmail = (e: any) => {
        e.preventDefault()
        alert('Ваше замовлення видправлено')
        setOpen(false)
        emailjs.sendForm('service_bd4iw0b', 'template_h4api22', e.target, '2gFQR1rMn1j28Vvml')
        console.log(e.target.phone)
    }
    return (
        <div>
            <button className={s.buttonCheckout} onClick={handleOpen}>Оформити замовлення</button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className={st.title}>
                        Ваше замовлення
                    </div>
                    {products.map(el => {
                        return <div key={el.id} className={st.descriptionBlock}>
                            <span>{el.title}</span>
                            <span style={{
                                marginLeft: '15px',
                                fontWeight: 'bold'
                            }}>{el.totalAmount}{el.type === 'package' ? ' уп' : ' г'}</span>
                            <span style={{marginLeft: '15px', fontWeight: 'bold'}}>{el.totalPrice} грн</span>
                            <hr/>
                        </div>
                    })}
                    <div className={st.title}>
                        Сума замовлення: {totalCartPrice} грн
                    </div>
                    <form onSubmit={sendEmail} className={st.formContainer}>
                        <select className={st.inputForm} placeholder={'Ваш магазин'} {...register('shop', {required: true})}>
                            {shops.map((el, index) => {
                                return <option key={index} value={el.city + ' ' + el.address}>{el.city + ', ' + el.address}</option>
                            })}
                        </select>
                        {/*<label>Ваше ім'я</label>*/}
                        <input className={st.inputForm} placeholder={'Ваше ім\'я'} {...register('name', {
                            required: true,
                            maxLength: 80
                        })}/>
                        {errors.name && <span style={{fontSize: '12px', color: 'red'}}>Будь ласка, введіть ім'я</span>}
                        <input className={st.inputForm} type={'tel'} placeholder={'Ваш телефон'} {...register('phone', {
                            required: true,
                            minLength: 9,
                            maxLength: 13
                        })}/>
                        {errors.phone && <span style={{fontSize: '12px', color: 'red'}}>Будь ласка, введіть правильний номер телефону</span>}
                        <input className={st.inputForm} placeholder={'Адреса доставки'} {...register('address')}/>
                        <input className={st.inputForm}
                               placeholder={'Коментар для співробітників'} {...register('comment')}/>
                        <input hidden={true} {...register('products')}/>
                        <input hidden={true} {...register('totalPrice')}/>
                        {/*<input type={'submit'}/>*/}
                        <button type={'submit'} onClick={() => {
                            // setValue('name', '');
                            // setValue('phone', '');
                            // setValue('address', '');
                            // setValue('comment', '');
                            setValue('products', products.map(el => el.title + ' ' + el.totalAmount + ' уп(грам)'));
                            setValue('totalPrice', totalCartPrice)
                        }}>
                            Відправити замовлення
                        </button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}