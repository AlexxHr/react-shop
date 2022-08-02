import { Link } from "react-router-dom";

function ShopItem(
    {
        item
    }
) {
    return (
        <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }} className="item-card">
            <img src={item.image} alt="img" />
            <div className="item-text">
                <p>{item.title}</p>
                <span>${item.price}</span>
            </div>
        </Link>
    );
}

export default ShopItem;