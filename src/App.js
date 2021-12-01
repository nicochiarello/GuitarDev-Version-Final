import './App.css';
import HomePage from './Pages/HomePage';
import Categories from './Pages/Categories';
import SingleProduct from './Pages/SingleProduct';
import CartPage from './Pages/CartPage';
import { CartFunction } from "./context/CartContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from './Pages/Users';


function App() {
  return (
    <>
    <Router>

    <CartFunction>

      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/category/:categoryId" element={ <Categories/> } />
        <Route path="/user" element={<Users/>} />
        <Route path="/product/item/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<CartPage/>} />
        
        

      </Routes>

    </CartFunction>
    </Router>
    </>
  );
}

export default App;
