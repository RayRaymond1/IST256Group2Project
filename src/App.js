import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './components/Home.js';
import Invoice from './components/Invoice.js'
import ProductList from './components/productList';
import Product from './components/product';
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'> 
      <MyNav />
        <BrowserRouter>
          <Routes>
            <Route path='/products' element={<ProductList />} />
            <Route path='' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' /> //add cart element
          </Routes>
        </BrowserRouter>
    </div>

  );
}
export default App;
