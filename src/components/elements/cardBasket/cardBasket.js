
import './cardBasket.css';

import vector1 from '../../../assets/Vector1.png'

const CardBasket = ({id, image, title, price}) => {

    return (
            <div className={'card-basket'}>
                <img className={'image'} src={image} alt='basket'/>
                <p className={'text title'}>{title}</p>
                <p className={' text price'}>{price} ₽</p>
                <button className={'add-to-cart-button'}>
                    <img src={vector1} alt="" />
                </button>
            </div>
    )
}

export default CardBasket;