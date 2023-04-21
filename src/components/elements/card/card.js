import React from 'react';

import './card.css'

const Card = ({id, image, title, description, price, amount}) => {

    const onAddToCartClickHandler = () => {
        const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];

        const updatedCart =[
            ...productsInCart,
            {id, image, title, description, price}
        ]

        localStorage.setItem('cart', JSON.stringify(updatedCart))

        const amountPrice = updatedCart.reduce((prev, current) => prev + current.price, 0);

        console.log(`Сумма заказа ${amountPrice}`);
    }

    return (

            <div className={'card'}>
                
                <img className={'image'} src={image} alt='product'/>
                <div className='txt'>
                    <p className={'text title'}>{title}</p>
                    <p className={'text description'}>{description}</p>
                </div>
                <div className='wrapper'>
                    <p className={' text price'}>{price} ₽</p>
                    <button 
                        className={'add-to-cart-button'}
                        onClick={onAddToCartClickHandler}>+
                    </button>
                </div>
            </div>
    )
}

export default Card;