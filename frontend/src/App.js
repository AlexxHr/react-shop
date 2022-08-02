import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
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
                    <Route path='/item/:id' element={<ItemDetails/>}></Route>
                </Routes>
            </main>
            
        </div>
    );
}

export default App;
