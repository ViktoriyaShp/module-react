import React from 'react';

import './ProductsHeader.css';

import basket from '../../../assets/basket.png'

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header =() => {

    const counter = useSelector(({productReducer}) => productReducer.counter)
    const totalPrice = useSelector(({productReducer}) => productReducer.totalPrice)

    let navigate = useNavigate();

    const onCartButtonClickHandler = () => {
        return navigate('/module-react/basket')
    };

    return (
        <div className='header'>
            <div className='header_products'>
                <h1 className='header_title'>наша продукция</h1>
                <div className='header_basket-btn'>
                    <button className='header_basket' onClick={onCartButtonClickHandler}>
                        <div className='header_price'>
                            <p>{counter} товара<br />на сумму {totalPrice} ₽</p>
                            <img src={basket} alt="" />
                        </div>
                    </button>
                    <button className='header_btn'>
                        <p className='header_txt'>Выйти</p>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Header;