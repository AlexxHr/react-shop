import {useState} from 'react'

function EditDialog({
    onClose,
    editHandler
}) {
    return (
        <section className='overlay'>
            <section className="backdrop" onClick={onClose}></section>
            <article className="modal"  >
            <form onSubmit={editHandler} className="create-form">
                        <h1 className="create-text">List an item</h1>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            required
                        />
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price"
                            required
                        />
                        <label htmlFor="category">Category:</label>
                        <select required name="category">
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
                            placeholder="Description"
                            required
                        />
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            required
                        />
                        <button className="create-btn">Edit</button>
                    </form>
                <button className="btn" onClick={onClose}>X</button>          
            </article>
        </section>
    )
}

export default EditDialog