import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js'
import About from './About.js'
import Category from './ByCategories.js'
import Product from './Product.js'
import Cart from './CartComponent.js'
import { CartProvider } from './CartContext'

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />}/>
          <Route path="/category/:id" element={<Category />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;