import React from 'react';

import './card.css'

const Card = ({id, image, title, description, price, weight}) => {

    const onAddClickHandler = () => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

        const product = {id, title, image, price};

        currentCart.push(product);

        localStorage.setItem('cart', JSON.stringify(currentCart))

    }

    return (

            <div className={'card'}>
                
                <img className={'image'} src={image} alt='product'/>
                <div className='txt'>
                    <p className={'text title'}>{title}</p>
                    <p className={'text description'}>{description}</p>
                </div>
                <div className='wrapper'>
                    <p className={' text price'}>{price} ₽ / <span>{weight} г.</span></p>
                    <button 
                        className={'add-to-cart-button'}
                        onClick={onAddClickHandler}>+
                    </button>
                </div>
            </div>
    )
}

export default Card;