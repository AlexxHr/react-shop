import { Link } from 'react-router-dom'
import AuthContext from "../../context/AuthContext";
import ShopItem from './ShopItem/ShopItem';
import { useEffect, useState, useContext } from 'react'

function Shop() {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([])
    const [filterList, setFilterList] = useState([])

    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/items/')
                .then(res => res.json())
                .then(data => setItems(data))
            setFilterList(items)
        }
        , [])

    useEffect(
        () => {
            setFilterList(items)
        }
        , [items])

    function searchHandler(ev) {
        if (ev.target.value == '') {
            return setFilterList(items)
        }
        setFilterList(items.filter(item => item.title.toUpperCase().includes(ev.target.value.toUpperCase())))
    }


    return (
        <section className="shop">
            <div className="shop-header">
                <form className="shop-form">
                    <input className="search-bar" onChange={searchHandler} type="text" />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>

                </form>
                {user ?
                    <div>
                        <Link to="/create"><i className="fa-solid fa-plus shop-add"></i> Add Item</Link>
                    </div>
                    : null}

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
                <div className="item-wrapper">
                    <ul className="item-list">
                        {filterList.length ?
                            filterList.map((item) => <ShopItem item={item} key={item.id} />)
                            : <h1 className='item-list-not-found'>No items</h1>}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Shop;