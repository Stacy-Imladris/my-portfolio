import React from 'react';
import style from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {BurgerNav} from './burgerNav/BurgerNav';

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
}
