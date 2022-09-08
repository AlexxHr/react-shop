import CartItem from "./CartItem/CartItem";
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart({cart, updateItem}) {  
    return (
        <section className="cart-page">
            <section className="cart-items">
                {cart.map((item) => <CartItem updateItem={updateItem} item={item} key={item.id} />)}
            </section>
            <section className="cart-checkout">
                <p className="item-info">Amount of items: {cart.length}</p>
                <p className="item-info">Total price: <span>${cart.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0)}</span></p>
                <div className="checkout-buttons">
                    <button>Checkout</button>
                    <button><Link to='/shop'>Continue</Link></button>
                </div>
                
            </section>
        </section>
    );
}

export default Cart;