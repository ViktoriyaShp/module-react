
import './index.css';

import Card from '../../components/elements/card/index.js';

import image1 from '../../assets/f1.png'
import image2 from '../../assets/f2.png'
import image3 from '../../assets/f3.png'

import { useEffect } from 'react';
import { useState } from 'react';

const Products =() => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(prevState => [
                // ...prevState,
                
                    {
                        id: 1,
                        image: image1,
                        title: 'Устрицы по рокфеллеровски',
                        description:'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
                        price: 2700
                    },
                    {
                        id: 2,
                        image: image2,
                        title: 'Свиные ребрышки на гриле с зеленью',
                        description:'Не следует, однако забывать, что реализация намеченных плановых',
                        price: 1600
                    },
                    {
                        id: 3,
                        image: image3,
                        title: 'Креветки по-королевски в лимонном соке',
                        description:'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
                        price: 1820
                    },
                    {
                        id: 4,
                        image: image1,
                        title: 'Устрицы по рокфеллеровски',
                        description:'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
                        price: 2700
                    },
                    {
                        id: 5,
                        image: image1,
                        title: 'Устрицы по рокфеллеровски',
                        description:'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
                        price: 2700
                    },
                    {
                        id: 6,
                        image: image2,
                        title: 'Свиные ребрышки на гриле с зеленью',
                        description:'Не следует, однако забывать, что реализация намеченных плановых',
                        price: 1600
                    },
                    {
                        id: 7,
                        image: image3,
                        title: 'Креветки по-королевски в лимонном соке',
                        description:'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
                        price: 1820
                    },
                    {
                        id: 8,
                        image: image1,
                        title: 'Устрицы по рокфеллеровски',
                        description:'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
                        price: 2700
                    }
            ])

        }, 1200)
    }, [])

    return (
        <div className={'product-wrapper'}>{
            products.map(product => 
            <Card 
            // key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            />)
        }</div>
    )
}

export default Products;