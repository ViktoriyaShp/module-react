
import './basket.css';

import CardBasket from '../../components/elements/cardBasket/cardBasket';

import image1 from '../../assets/f3.png'
import image2 from '../../assets/f2.png'
import image3 from '../../assets/f3.png'

import { useEffect } from 'react';
import { useState } from 'react';

const Basket =() => {

    const [basket, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(prevState => [
                
                    {
                        id: 1,
                        image: image1,
                        title: 'Устрицы по рокфеллеровски',
                        price: 2700
                    },
                    {
                        id: 2,
                        image: image2,
                        title: 'Свиные ребрышки на гриле с зеленью',
                        price: 1600
                    },
                    {
                        id: 3,
                        image: image3,
                        title: 'Креветки по-королевски в лимонном соке',
                        price: 1820
                    },
            ])
        }, 1200)
    }, [])

    return (
        <div className={'basket-wrapper'}>{
            basket.map(product => 
            <CardBasket 
            // key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            />)
        }</div>
    )
}

export default Basket;