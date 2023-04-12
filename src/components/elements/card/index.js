import './card.css'

function Card({url, title, description, price}) {
    return (
            <div className="card">
                <img className='card_preview' src={url} alt="" />

                <h2 className='card_title'>{title}</h2>

                <p className='card_description'>{description}</p>

                <div className='card_price'>{price}</div>

                <button className="card_plus"></button>
            </div>
    )
}

export default Card;