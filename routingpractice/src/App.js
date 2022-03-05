import './App.css';
import {BrowserRouter, RouteProps, Route, Link, Routes} from 'react-router-dom';
import Home from './components/Home';
import WordComponent from './components/WordComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:param" element={<WordComponent/>} />
        <Route path="/:param/:color1/:color2" element={<WordComponent/>} />



      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
