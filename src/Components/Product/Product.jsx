export default function Product( {img , title , description , price} ) {

    return (
        <li className="meal-item">
            <article>
                <img src={img} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p className="meal-item-price">${price}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="menu-item-actions">
                    <button className="button">Add To Cart</button>
                </p>
            </article>

        </li>
    )

}