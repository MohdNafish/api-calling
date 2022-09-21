import './App.css';
import Home from "./Home";
import FavoriteUser from "./favoriteUser";
import { Checkout } from './Checkout';
import { Route, Link, Routes } from 'react-router-dom'  
import ProductList from "./ProductList";
import Header from "./layout/Header";
import { useState } from 'react';


const App = () => {

  // const [cart, setCart] = useState([]);

      return (
        <>
         <div className="App">
            <Header />
            <Routes>
              <Route exact={true} path='/' element={<Home />}>

              </Route>
              <Route exact={true} path='/favorite' element={<FavoriteUser />}></Route>
              <Route exact={true} path='/product-list' element={<ProductList />}></Route>
              <Route exact={true} path='/checkout' element={<Checkout />}></Route>
            </Routes>
          </div>
        </>
  );
}

export default App;