import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

function ItemDetails() {
    const [ item, setItem ] = useState([])
    const { id } = useParams();

    useEffect(
        () => {
            window.scrollTo(0, 0)
            fetch(`http://127.0.0.1:8000/items/${id}`)
                .then(res => res.json())
                .then(data => setItem(data))
        }
        , [])
    return (
        <section className="item">
            <section className="item-details">
                <img src={item.image} alt="img"/>
                <article className="item-content">
                    <h1 className="item-name">{item.title}</h1>
                    <p className="item-info">Price: <span>${item.price}</span></p>
                    <p className="item-info">Category: <span>{item.category}</span></p>
                    <p className="item-text">{item.description}</p>
                    <div className="add-cart-btn"><button>Add to cart</button></div>
                </article>
            </section>
        </section>
    );
}

export default ItemDetails;