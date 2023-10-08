import React from "react";
import s from './Header.module.css'
import logo from './../../../common/images/logo.png'
import {NavLink} from "react-router-dom";
import {PATH} from "common/routes/Routes";
import {Navbar} from "common/components/Navbar/Navbar";
import {useAppSelector} from "app/store";
import {selectProducts} from "features/Cart/model/selectors";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Header: React.FC = () => {
    const products = useAppSelector(selectProducts)
    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.logoContainer}>
                    <NavLink to={PATH.home}><img className={s.imgLogo} src={logo} alt={'logo'}/></NavLink>
                </div>
                <div className={s.title}>Пивний Живіт - мережа магазинів живого пива!</div>
                <div className={s.cartBlock}>
                    <NavLink style={{textDecoration: 'none'}} to={PATH.cart}>
                        <span className={s.cartLogoBlock}>
                            <ShoppingCartOutlinedIcon className={s.shoppingCart}/>
                            {/*<img*/}
                            {/*className={s.cartLogo}*/}
                            {/*src={cart_logo} alt={'cart'}/>*/}
                            {products.length !== 0 && <div className={s.cartNumber}>{products.length}</div>}
                            </span>

                    </NavLink>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}