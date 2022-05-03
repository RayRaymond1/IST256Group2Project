import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './components/Home.js';
import ProductList from './components/productList';
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart';
import Invoice from './components/Invoice';
import Checkout from './components/checkout.js'

function App() {
  return (
    <div className='App'> 
      <MyNav />
        <BrowserRouter basename="/IST256Group2Project">
          <Routes>
            <Route path='/products' element={<ProductList />} />
            <Route path='' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart'  element={<Cart />}/> //add cart element
            <Route path='/invoice' element={<Invoice />}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
