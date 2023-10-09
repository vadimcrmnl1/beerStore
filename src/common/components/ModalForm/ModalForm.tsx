import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from '../../../features/Cart/components/CartWindow/CartWindow.module.css'
import st from './ModalForm.module.css'
import {useAppSelector} from "app/store";
import {selectProducts, selectTotalCartPrice} from "features/Cart/model/selectors";
import {Form} from './Form/Form';

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


export const ModalForm: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const products = useAppSelector(selectProducts)
    const totalCartPrice = useAppSelector(selectTotalCartPrice)

    return (
        <div>
            <button className={s.buttonCheckout} onClick={handleOpen}>Оформити замовлення</button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} className={st.boxStyle}>
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
                    <Form setOpen={setOpen} products={products} totalCartPrice={totalCartPrice}/>
                </Box>
            </Modal>
        </div>
    );
}