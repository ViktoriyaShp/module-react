import React from 'react';

import './headerBasket.css';

import vector from '../../assets/Vector.png'

const HeaderBasket =() => {

    return (
        <div className='basket'>
            <div className='basket_header'>
                <button className='basket_btn'>
                    <img src={vector} alt="" />
                </button>
                <h1 className='basket_title'>Корзина с выбранными товарами</h1>
            </div>
        </div>
    )
}

export default HeaderBasket;