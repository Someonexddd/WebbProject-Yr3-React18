import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Layout } from './components/Layout';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Details from './components/Details';
import './App.css';
import  Profile  from "./components/Auth0Comps/Profile";
import { ProtectedRoute } from "./components/protected-route";
import EditPage from './components/EditPage';
import PurchaseForm from "./components/Purchase";
import Purchases from "./components/Purchases";
import Search from './components/Search'
// imports


function App() {


  return (
    //React Router Routes
    //Protected routes ensures the user is logged in
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/ProductList' element={<ProductList />} />
          <Route path='/NewInStock' element={<ProductList />} />
          <Route path='/Topsellers' element={<ProductList />} />
          <Route path='/Vinyl' element={<ProductList />} />
          <Route path='/CD' element={<ProductList />} />
          <Route path='/Cassette' element={<ProductList />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/Purchase' element={<PurchaseForm />} />
          <Route path='/Purchases' element={<Purchases/>}/>
          <Route path='/Search' element={<Search/>}/>
          
          <Route path='/Profile' element={<ProtectedRoute component={Profile}/>}/>
          <Route path='/EditPage' element={<ProtectedRoute component={EditPage}/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
