import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { CartFunction } from './context/CartContext';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <>
      <Router>
      <CartFunction>
      <NavBar/>
    
      
        <Routes>
          <Route exact path="/category/:categoryId" element={ <ItemListContainer/>} />
          <Route exact path="/" element={ <ItemListContainer/> } />
          <Route exact path="product/item/:id" element={ <ItemDetailContainer/> } />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
      </CartFunction>
      </Router>
    </>
  )
}

export default App;
