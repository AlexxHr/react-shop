import { Link } from 'react-router-dom'
import ShopItem from './ShopItem/ShopItem';
import { useEffect, useState } from 'react'

function Shop() {
    const [items, setItems] = useState([])

    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/items/')
                .then(res => res.json())
                .then(data => setItems(data))
        }
        , [])

    return (
        <section className="shop">
            <div className="shop-header">
                <form className="shop-form">
                    <input className="search-bar" type="text" />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>

                </form>
                <div>
                <Link to="/create"><i class="fa-solid fa-plus shop-add"></i></Link>
                
                </div>
            </div>
            <div className="shop-content">
                <aside className="shop-nav">
                    <ul className="shop-nav-filters">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </aside>
                <ul className="item-list">
                    {items.map(item => <ShopItem item={item} key={item.id} />)}

                </ul>
                
            </div>
        </section>
    );
}

export default Shop;