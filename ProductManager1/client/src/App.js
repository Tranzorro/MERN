import './App.css';
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductForm from'./components/productForm';
import DisplayAllProducts from'./components/DisplayAllProducts';
import DisplayOneProduct from './components/DisplayOneProduct';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<ProductForm/>} path="/" />
          <Route element={<DisplayAllProducts/>} path="/all" />
          <Route element={<DisplayOneProduct/>} path="/api/products/:id" />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
