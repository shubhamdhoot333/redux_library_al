
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
// import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>

          <Route path='/' element={< Home />}></Route>
          <Route path='/cart' element={<Cart />} > </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
