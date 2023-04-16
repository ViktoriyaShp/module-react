import React from 'react';

import './index.css';

import basket from '../../assets/basket.png'

// import Products from '../ProductsPage/index.js';


const Header =() => {
    return (
        <div className='header'>
            <div className='header_products'>
                <h1 className='header_title'>наша продукция</h1>
                <button className='header_basket'>
                    <div className='header_price'>
                        <p>3 товара<br />на сумму 3 500 ₽</p>
                        <img src={basket} alt="" />
                    </div>
                </button>
            </div>
        </div>

    )
}

export default Header;