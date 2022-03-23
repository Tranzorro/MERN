import './App.css';
import ProductForm from'./components/productForm';

const App = props => {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <ProductForm />
    </div>
  );
}

export default App;
