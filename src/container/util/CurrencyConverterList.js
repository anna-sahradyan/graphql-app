import React from 'react';
import s from '../../components/Header/Header.module.scss';
const CurrencyConverterList = () => {
    const symbols = ['$', '£', 'A$', '¥', '₽'];
    const rates = {
        "USD": 1.205736,
        "GBP": 0.866671,
        "AUD": 1.555409,
        "JPY": 130.210363,
        "RUB": 91.181299
    }


    return (
        <>
           <div className={s.rate}>
               <select name="type-currency">
               {symbols.map((item,index)=>(
                   <option key={`${item}_${index}`} value={item} defaultValue={`$`}>
                       {item}
                   </option>
               ))}
               </select>

           </div>
        </>
    );
};

export default CurrencyConverterList;