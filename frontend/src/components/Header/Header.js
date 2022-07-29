import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
    <header>
        <nav className="navbar">
            <ul className="nav-items">
                <NavLink style={{ textDecoration: 'none' }} to='/'>
                    <li><i className="fa-solid fa-house"></i>Home</li>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to='/shop'>
                    <li><i className="fa-solid fa-basket-shopping"></i>Shop</li>
                </NavLink>
            </ul>
            <ul className="nav-items nav-user">
                <li className="dropdown"><i className="fa-solid fa-user"></i>
                    <ul className="dropdown-content">
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </li>
                <li><i className="fa-solid fa-heart"></i></li>
                <li><i className="fa-solid fa-cart-shopping"></i></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;