import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import AuthContext from "../../context/AuthContext";

function ItemDetails({ addToCart }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(
        () => {
            window.scrollTo(0, 0)
            fetch(`http://127.0.0.1:8000/items/${id}`)
                .then(res => res.json())
                .then(data => setItem(data))
        }
        , [])

    const deleteHandler = () => {
        fetch(`http://127.0.0.1:8000/items/${id}`, {
            method: 'DELETE',
        })
            .then(res => navigate('/shop'))
    }

    return (
        <section className="item">
            <section className="item-details">
                <div className="img-wrapper">
                    <img src={item.image} alt="img" />
                </div>
                <article className="item-content">
                    {user.user_id == item.user ?
                        <div>
                            <button onClick={deleteHandler}>Delete</button>
                            <button>Edit</button>
                        </div>
                        : <div></div>}
                    <h1 className="item-name">{item.title}</h1>
                    <p className="item-info">Price: <span>${item.price}</span></p>
                    <p className="item-info">Category: <span>{item.category}</span></p>
                    <p className="item-text">{item.description}</p>
                    <div className="add-cart-btn"><button onClick={() => addToCart(item)}>Add to cart</button></div>
                </article>
            </section>
        </section>
    );
}

export default ItemDetails;