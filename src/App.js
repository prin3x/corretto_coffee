import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.component';
import ProductPreview from './components/ProductPreview/ProductPreview.component';
import Footer from './components/Footer/Footer.component';
import Contact from './pages/Contact.page/Contact.page';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import {ProductContextProvider} from './context/ProductContext';
import {UserContextProvider} from './context/UserContext';
import PrivateRoutes from './privateRoutes/PrivateRoutes';
import Checkout from './pages/Checkout/Checkout';

const App = () => {
  return (
    <div className='App'>
      <ProductContextProvider>
        <UserContextProvider>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Header />
              <ProductPreview />
            </Route>
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/checkout' component={Checkout} />
            <PrivateRoutes />
          </Switch>
          <Footer />
        </UserContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;
