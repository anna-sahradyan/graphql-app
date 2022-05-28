import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss';
import HeaderCartList from "../../container/Cart/HeaderCartList";
import CurrencyConverterList from "../../container/util/CurrencyConverterList";
class Header extends Component {
    render() {
        return (
            <>
                <header className={s.header}>
                    <nav>
                        <ul>
                            <li><NavLink to ='/'>woman</NavLink></li>
                            <li><NavLink to ='/'>men</NavLink></li>
                            <li><NavLink to ='/'>kids</NavLink></li>
                        </ul>
                        <div className={s.logo}>
                            <img src="/img/logo.svg" alt="logo"/>
                        </div>
                        <div className={s.cartButton}>
                            <HeaderCartList/>
                            <CurrencyConverterList/>
                        </div>
                    </nav>

                </header>
            </>
        );
    }
}

export default Header;