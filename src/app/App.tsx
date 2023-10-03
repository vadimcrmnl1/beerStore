import React from 'react';
import {Header} from 'common/components/Header/Header';
import s from './App.module.css'
import {Footer} from "common/components/Footer/Footer";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App