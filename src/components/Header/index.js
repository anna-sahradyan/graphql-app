import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss';
import HeaderCartList from "../../container/Cart/HeaderCartList";
import CurrencyConverterList from "../../container/util/CurrencyConverterList";
const Header = () => {
    return (
        <>
            <header className={s.header}>
          <nav>
              <ul>
                  <li><NavLink to ='/'>WOMEN</NavLink></li>
                  <li><NavLink to ='/'>MEN</NavLink></li>
                  <li><NavLink to ='/'>KIDS</NavLink></li>
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
};

export default Header;