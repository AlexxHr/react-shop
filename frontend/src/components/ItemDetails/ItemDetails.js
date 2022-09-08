import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import AuthContext from "../../context/AuthContext";
import DeleteDialog from './DeleteDialog'
import EditDialog from './EditDialog'
import './ItemDetails.css'

function ItemDetails({ addToCart }) {
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const navigate = useNavigate();

    const [item, setItem] = useState([])
    const [action, setAction] = useState(null)


    useEffect(
        () => {
            window.scrollTo(0, 0)
            fetch(`http://127.0.0.1:8000/items/${id}`)
                .then(res => res.json())
                .then(data => setItem(data))
        }
        , [])

    const onClose = () => {
        setAction(null)
    }

    const onDelete = () => {
        setAction('delete')
    }

    const deleteHandler = () => {
        fetch(`http://127.0.0.1:8000/items/${id}`, {
            method: 'DELETE',
        })
            .then(res => navigate('/shop'))
    }

    const onEdit = () => {
        setAction('edit')
    }

    const editHandler = async (e) => {
        e.preventDefault()

        const x = new FormData(e.target)
        x.append('user', user.user_id)
        const form_data = Object.fromEntries(x);

        let url = `http://127.0.0.1:8000/items/${item.id}/`;
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        const res = await axios.put(url, form_data, config)
        const data = setItem(res.data)
        onClose()
        
            // .catch(err => console.log(err))
    };
    

    return (
        <>
            <section className="item">
                <section className="item-details">
                    <div className="img-wrapper">
                        <img src={item.image} alt="img" />
                    </div>
                    <article className="item-content">
                        {user && user.user_id == item.user ?
                            <div>
                                <button onClick={onDelete}>Delete</button>
                                <button onClick={onEdit}>Edit</button>
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
            {action == 'delete' &&
                <DeleteDialog deleteHandler={deleteHandler} onClose={onClose} />}
            {action == 'edit' &&
                <EditDialog editHandler={editHandler} onClose={onClose}/>}
        </>
    );
}

export default ItemDetails;