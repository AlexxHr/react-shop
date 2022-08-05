import { Route, Routes } from 'react-router-dom'

import React from 'react';
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Shop from './components/Shop/Shop';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import ProtectedPage from "./views/ProtectedPage";


function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Header/>           
                <Routes>
                    <Route path="/protected" element={<PrivateRoute/>}>
                        <Route path="/protected" element={<ProtectedPage/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/cart" element={<h1>TSET</h1>} />
                    <Route path='/item/:id' element={<ItemDetails/>}/>
                </Routes>           
            </AuthProvider>    
        </div>
    );
}

export default App;
