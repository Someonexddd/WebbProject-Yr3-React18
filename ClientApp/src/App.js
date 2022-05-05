import { BrowserRouter, Routes, Route, } from "react-router-dom";

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import ProductList from './components/ProductList';
import Details from './components/Details';
import { FetchData } from './components/FetchData';
import './App.css';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/ProductList' element={<ProductList />} />
          <Route path='/Details' element={<Details />} />
          <AuthorizeRoute path='/fetch-data' element={<FetchData/>} />
          <Route path={ApplicationPaths.ApiAuthorizationPrefix} element={<ApiAuthorizationRoutes/>} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
