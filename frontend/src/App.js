import { Route, Routes } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Header from './components/Header/Header';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Shop from './components/Shop/Shop';
import Create from './components/Create/Create';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import ProtectedPage from "./views/ProtectedPage";
import Cart from './components/Cart/Cart';


function App() {
    let [cart, setCart] = useState([])

    let localCart = localStorage.getItem("cart");

    const addItem = (item) => {
        let cartCopy = [...cart];
        let { id } = item;
        
        let existingItem = cartCopy.find(cartItem => cartItem.id == id);
        item.quantity = 1
        if (existingItem) {
            existingItem.quantity += 1
        } else {
            
            cartCopy.push(item)
        }

        setCart(cartCopy)

        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)
    }

    const editItem = (itemID, amount) => {
        let cartCopy = [...cart]
        let existentItem = cartCopy.find(item => item.id == itemID);

        if (!existentItem) {
            return
        }

        existentItem.quantity += amount;

        if (existentItem.quantity <= 0) {
            cartCopy = cartCopy.filter(item => item.id != itemID)
        }

        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy);
        localStorage.setItem('cart', cartString);
    }
    
    const removeItem = (itemID) => {
        let cartCopy = [...cart]
        
        cartCopy = cartCopy.filter(item => item.ID != itemID);
        
        setCart(cartCopy);
        
        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)
      }

    useEffect(
        () => {
            localCart = JSON.parse(localCart);
            if (localCart) setCart(localCart)
        }
        , [])

    return (
        <div className="App">
            <AuthProvider>
                <Header cart={cart} />
                <Routes>
                    <Route path="/protected" element={<PrivateRoute />}>
                        <Route path="/protected" element={<ProtectedPage />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/cart" element={<Cart cart={cart} updateItem={editItem}/>} />
                    <Route path='/item/:id' element={<ItemDetails addToCart={addItem} />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
