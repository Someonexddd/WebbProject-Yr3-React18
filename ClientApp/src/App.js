import { BrowserRouter, Routes, Route, } from "react-router-dom";

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import ProductList from './components/ProductList';
import Details from './components/Details';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/ProductList' element={<ProductList/>} />
          <Route path='/Details' element={<Details/>} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
