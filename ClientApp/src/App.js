import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import ProductList from './components/ProductList';
import Details from './components/Details';
import './App.css';
import  Profile  from "./components/Auth0Comps/Profile";
import { ProtectedRoute } from "./components/protected-route";


function App() {


  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/ProductList' element={<ProductList />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/Profile' element={<ProtectedRoute component={Profile}/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
