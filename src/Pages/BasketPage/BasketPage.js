
import './BasketPage.css';

import CardBasket from '../../components/basket/BasketCard/BasketCard';
import FooterBasket from '../../components/basket/BasketFooter/BasketFooter';

import { useEffect } from 'react';
import { useState } from 'react';

// import { useSelector } from 'react-redux';


const Basket =() => {

    // const basket = useSelector(state => state.products.basket)
    // console.log('basket', basket);

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