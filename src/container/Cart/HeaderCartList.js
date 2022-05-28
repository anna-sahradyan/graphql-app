import s from '../../components/Header/Header.module.scss';
import React, {Component} from 'react';

class HeaderCartList extends Component {
    render() {
        return (
            <>
                <div className={s.cart}>
                    <img src="/img/cart1.svg" alt="cart"/>
                </div>
            </>
        );
    }
}

export default HeaderCartList;