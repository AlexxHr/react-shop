function CartItem({item, updateItem}) {
    return (
        <article className="cart-item">
            <img src={item.image} alt="" />
            <p className="cart-title">{item.title}</p>
            <p className="cart-quantity">{item.quantity}</p>
            <p className="cart-price">${item.price}</p>
            <div className="cart-buttons">
                <button onClick={() => updateItem(item.id, 1)}><i className="fa-solid fa-circle-plus"></i></button>
                <button onClick={() => updateItem(item.id, -1)}><i className="fa-solid fa-circle-minus"></i></button>
            </div>
        </article>
    );
}

export default CartItem;