import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './components/Home.js';
import ProductList from './components/productList';
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart';

function App() {
  return (
    <div className='App'> 
      <MyNav />
        <BrowserRouter>
          <Routes>
            <Route path='/products' element={<ProductList />} />
            <Route path='' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart'  element={<Cart />}/> //add cart element
          </Routes>
        </BrowserRouter>
    </div>

  );
}
export default App;
