import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import './Header.css'

function Header({cart}) {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <header>
            <nav className="navbar">
                <ul className="nav-items">
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li><i className="fa-solid fa-house"></i>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/shop'>
                        <li><i className="fa-solid fa-basket-shopping"></i>Shop</li>
                    </Link>
                </ul>
                <ul className="nav-items nav-user">
                    <li className="dropdown"><i className="fa-solid fa-user"></i>
                        <ul className="dropdown-content">
                            {!user
                                ? (
                                    <>
                                        <li><Link to={'/login/'}>Login</Link></li>
                                        <li><Link to={'/register/'}>Register</Link></li>
                                    </>
                                )
                                : (
                                    <>
                                        <li>{user.username}</li>
                                        <button onClick={logoutUser}>Logout</button>
                                    </>
                                )
                            }
                        </ul>
                    </li>
                    <li><i className="fa-solid fa-heart"></i></li>
                    <li><Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i>{cart.length}</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;