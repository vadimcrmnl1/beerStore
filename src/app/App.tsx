import {SimpleBackdrop} from "common/components/BackDrop/BackDrop";
import {Footer} from "common/components/Footer/Footer";
import {Header} from 'common/components/Header/Header';
import {onValue, ref} from "firebase/database";
import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {setOrderSentAC} from "../features/Cart/model/actions";
import {selectOrderSent} from "../features/Cart/model/selectors";
import {fetchDrinksAC} from "../features/components/Drinks/model/actions";
import {fetchSnacksAC} from "../features/components/Snacks/model/actions";
import {setAppIsLoadingAC} from "./actions";
import s from './App.module.css'
import {db} from "./firebase";
import {useAppDispatch, useAppSelector} from "./store";

function App() {
    const dispatch = useAppDispatch()
    const orderSent = useAppSelector(selectOrderSent)
    useEffect(() => {
        dispatch(setAppIsLoadingAC(true))
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            dispatch(fetchSnacksAC(data.snacks.toast, data.snacks.seafood, data.snacks.chips))
            dispatch(fetchDrinksAC(data.drinks))
            dispatch(setAppIsLoadingAC(false))
            dispatch(setOrderSentAC(false))
        })

    }, [orderSent])
    return (
        <div className={s.App}>
            <Header/>
            <SimpleBackdrop/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App
