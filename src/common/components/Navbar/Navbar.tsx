import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "common/routes/Routes";

export const Navbar = () => {
    return (
        <div className={s.container}>
            <div className={s.buttonBlock}>
                <NavLink to={PATH.beer} className={({isActive}) =>
                    isActive ? `${s.activeButton} + ' ' ${s.link}` : `${s.pendingButton} + ' ' ${s.link}`
                }>Пиво</NavLink>
                <NavLink to={PATH.shacks} className={({isActive}) =>
                    isActive ? `${s.activeButton} + ' ' ${s.link}` : `${s.pendingButton} + ' ' ${s.link}`
                }>Закуски</NavLink>
                <NavLink to={PATH.fish} className={({isActive}) =>
                    isActive ? `${s.activeButton} + ' ' ${s.link}` : `${s.pendingButton} + ' ' ${s.link}`
                }>Ріба</NavLink>
                <NavLink to={PATH.drinks} className={({isActive}) =>
                    isActive ? `${s.activeButton} + ' ' ${s.link}` : `${s.pendingButton} + ' ' ${s.link}`
                }>Напої</NavLink>
                <NavLink to={PATH.souvenirs} className={({isActive}) =>
                    isActive ? `${s.activeButton} + ' ' ${s.link}` : `${s.pendingButton} + ' ' ${s.link}`
                }>Сувенирі</NavLink>
                <NavLink to={PATH.shops} className={({isActive}) =>
                    isActive ? `${s.activeButton} + ' ' ${s.link}` : `${s.pendingButton} + ' ' ${s.link}`
                }>Магазині</NavLink>
            </div>
        </div>
    )
}