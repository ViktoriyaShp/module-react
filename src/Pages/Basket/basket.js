
import './basket.css';

import CardBasket from '../../components/elements/cardBasket/cardBasket';
import FooterBasket from '../../components/elements/footerBasket/footerBasket';

import { useEffect } from 'react';
import { useState } from 'react';


const Basket =() => {

    const [items, setItems] = useState([]);
    const [amountPrice, setAmountPrice] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));

        setItems(cart)
    }, [])

    
    useEffect(() => {
        const amountPrice = items.reduce((amountPrice, {price}) => amountPrice + price, 0);

        setAmountPrice(amountPrice)
    }, [items])

    return (
    <div>   
        <div className={'basket-wrapper'}>{
            items.map(product => 
            <CardBasket 
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onRemoveHandler={setItems}
            />)
        }</div>
        <FooterBasket amountPrice={amountPrice}/>
    </div> 
    )
}

export default Basket;