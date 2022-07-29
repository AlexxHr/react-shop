import { Route, Routes, Link } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/cart" element={<h1>TSET</h1>} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </main>
            
        </div>
    );
}

export default App;
