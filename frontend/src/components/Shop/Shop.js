import { Link } from 'react-router-dom'
import AuthContext from "../../context/AuthContext";
import ShopItem from './ShopItem/ShopItem';
import { useEffect, useState, useContext} from 'react'
import './Shop.css'

function Shop() {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([])
    const [filterList, setFilterList] = useState([])
    const [categorySelected, setCategorySelected] = useState([])

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

    useEffect(() => {
        console.log(categorySelected)
        if (categorySelected.length <= 0) {
            return setFilterList(items)
        }
        const x = items.filter((item) => {
            if (categorySelected.includes(item.category)) {
                return item
            }
            })
        setFilterList(x)
    }, [categorySelected]);


    const searchHandler = (e) => {
        e.preventDefault()
        if (e.target.search.value == '') {
            return setFilterList(items)
        }
        setFilterList(items.filter(item => item.title.toUpperCase().includes(e.target.search.value.toUpperCase())))
    }

    const onCategorySelect = (e) => {
        const oldCategorySelected = [...categorySelected]

        if (e.target.checked) {
            oldCategorySelected.push(e.target.value)
            setCategorySelected(oldCategorySelected)
        } else {
            setCategorySelected(oldCategorySelected.filter(item => item != e.target.value))
        }     
              
    }

    return (
        <section className="shop">
            <div className="shop-header">
                <form className="shop-form" onSubmit={searchHandler}>
                    <input name="search" className="search-bar"  type="text" />
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
                        <input type="checkbox" onChange={onCategorySelect} name="electronics" value="Electronics" />
                        <label htmlFor="electronics">Electronics</label>
                        <input type="checkbox" onChange={onCategorySelect} name="furniture" value="Furniture"/>
                        <label htmlFor="furniture">Furniture</label>
                        <input type="checkbox" onChange={onCategorySelect} name="clothing" value="Clothing"/>
                        <label htmlFor="other">Clothing</label>
                        <input type="checkbox" onChange={onCategorySelect} name="other" value="Other"/>
                        <label htmlFor="other">Other</label>                 
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