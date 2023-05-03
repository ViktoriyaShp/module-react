
import './BasketCard.css';

import vector1 from '../../../assets/Vector1.png'

// import { useDispatch } from 'react-redux';

// import { remove } from '../../../store/reducers/products'

const CardBasket = ({id, image, title, price, onRemoveHandler}) => {

    const onRemoveFromCartHandler = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []; 

        const updCart = cart.filter(item => item.id !== id)

        localStorage.setItem('cart', JSON.stringify(updCart))

        onRemoveHandler(updCart)
    }

    // const dispatch = useDispatch();
    
    // const removeToRedux = () => {
    //     dispatch(remove({
    //         id
    //     }))
    // };

    return (
            <div className={'card-basket'}>
                <img className={'card-basket_image'} src={image} alt='basket'/>
                <p className={'text card-basket_title'}>{title}</p>
                <p className={' text card-basket_price'}>{price} ₽</p>
                <button className={'add-to-cartbasket-button'} onClick={onRemoveFromCartHandler}>
                    <img src={vector1} alt="" />
                </button>
            </div>
    )
}

export default CardBasket;