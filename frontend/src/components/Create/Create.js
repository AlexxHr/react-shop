import axios from "axios";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Create = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const x = new FormData(e.target)
        x.append('user', user.user_id)
        const form_data = Object.fromEntries(x);

        let url = 'http://127.0.0.1:8000/items/';
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        axios.post(url, form_data, config)
            .then(res => {
                console.log(res.request.status);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };

    return (
        user ?
            <section className="create">
                <article className="create-box">
                    <form onSubmit={handleSubmit} className="create-form">
                        <h1 className="create-text">List an item</h1>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            required
                        />
                        <input
                            type="number"
                            id="price"
                            name="price"
                            onChange={e => setPrice(e.target.value)}
                            placeholder="Price"
                            required
                        />
                        <label htmlFor="category">Category:</label>
                        <select required name="category" value={category} onChange={e => setCategory(e.target.value)}>
                            <option default style={{ display: 'none' }}></option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Other">Other</option>
                        </select>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Description"
                            required
                        />
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={e => setImage(e.target.value)}
                            required
                        />
                        <button className="create-btn">Create</button>
                    </form>
                </article>
            </section>
            : <Navigate to={'/login'} />
    );
};

export default Create;
