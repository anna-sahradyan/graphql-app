import s from '../../components/Header/Header.module.scss';
import React, {Component} from 'react';

class CurrencyConverterList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.symbols = ['$', '£', 'A$', '¥', '₽'];
        this.rates = {
            "USD": 1.205736,
            "GBP": 0.866671,
            "AUD": 1.555409,
            "JPY": 130.210363,
            "RUB": 91.181299
        }
    }

    render() {
        return (<>
            <div className={s.rate}>
                <select name="type-currency">
                    {this.symbols.map((item, index) => (<option key={`${item}_${index}`} value={item} defaultValue={`$`}>
                        {item}
                    </option>))}
                </select>

            </div>
        </>);
    }
}

export default CurrencyConverterList;