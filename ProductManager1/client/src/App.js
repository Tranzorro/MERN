import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductForm from'./components/productForm';
import DisplayAllProducts from'./components/DisplayAllProducts';
import DisplayOneProduct from './components/DisplayOneProduct';
import UpdateProduct from './components/UpdateProduct';



const App = () => {
  const [productList, setProductList] = useState([]);
  const removeFromDom = productId => {
    setProductList(productList.filter(product => product._id != productId));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<ProductForm/>} path="/" />
          <Route element={<DisplayAllProducts productList={productList} setProductList={setProductList} />} path="/all" />
          <Route element={<DisplayOneProduct  removeFromDom={removeFromDom}/>} path="/api/products/:id"/>
          <Route element={<UpdateProduct/>} path="/api/products/edit/:id" />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
