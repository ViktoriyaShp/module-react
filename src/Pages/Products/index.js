import './products.css'

import Card from '../../components/elements/card/index.js';

import f1 from '../../images/f1.png'
import f2 from '../../images/f2.png'
import f3 from '../../images/f3.png'
import basket from '../../images/basket.png'

function Products() {
    return (
        <div className='products'>
            <div className='products_header'>
            <h1 className='products_title'>наша продукция</h1>
            <button className='products_basket'>
                <div className='products_price'>
                    <p>3 товара<br />на сумму 3 500 ₽</p>
                    <img src={basket} alt="" />
                </div>
            </button>
            </div>
            <div className='container'>
            <Card 
            url={f1}
            title='Устрицы по рокфеллеровски'
            description='Значимость этих проблем
            настолько очевидна, что укрепление и развитие
            структуры'
            price='2 700 ₽/ 500 г.'
            />

            <Card 
            url={f2}
            title='Свиные ребрышки на гриле с зеленью'
            description='Не следует, однако забывать, что
            реализация намеченных плановых'
            price='1 600 ₽/ 750 г.'
            />

            <Card 
            url={f3}
            title='Креветки по-королевски в лимонном соке'
            description='Значимость этих проблем настолько 
            очевидна, что укрепление и развитие структуры 
            обеспечивает широкому кругу'
            price='1 820 ₽/ 7 шт.'
            />

            <Card 
            url={f1}
            title='Устрицы по рокфеллеровски'
            description='Значимость этих проблем
            настолько очевидна, что укрепление и развитие
            структуры'
            price='2 700 ₽/ 500 г.'
            />

            <Card 
            url={f1}
            title='Устрицы по рокфеллеровски'
            description='Значимость этих проблем
            настолько очевидна, что укрепление и развитие
            структуры'
            price='2 700 ₽/ 500 г.'
            />

            <Card 
            url={f2}
            title='Свиные ребрышки на гриле с зеленью'
            description='Не следует, однако забывать, что
            реализация намеченных плановых'
            price='1 600 ₽/ 750 г.'
            />

            <Card 
            url={f3}
            title='Креветки по-королевски в лимонном соке'
            description='Значимость этих проблем настолько 
            очевидна, что укрепление и развитие структуры 
            обеспечивает широкому кругу'
            price='1 820 ₽/ 7 шт.'
            />

            <Card 
            url={f1}
            title='Устрицы по рокфеллеровски'
            description='Значимость этих проблем
            настолько очевидна, что укрепление и развитие
            структуры'
            price='2 700 ₽/ 500 г.'
            />
            </div>
        </div>
    )
}

export default Products;