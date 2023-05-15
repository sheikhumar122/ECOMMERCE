import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/Layout/Footer/footer';
import Header from "./component/Layout/Header/header.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Loader from './component/Layout/Loader/loader';
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Product.js';
import Search from './component/Product/Search.js';
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/Layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
//import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from './component/Cart/Cart';
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js"
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/admin/Dashboard.js"
import ProductList from "./component/admin/ProductList.js"
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct.js';


function App() {
  const { isAuthenticated, user } = useSelector((state)=> state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            {/* Wrap the routes that require the Elements component in the Elements provider */}
            <Route exact path="/process/payment" element={<Payment />} />
          </Routes>
        </Elements>
      )}
  
      <Routes>
      <Route exact={true} path='/' element={<Home/>} />
      <Route exact={true} path="/product/:id" element={<ProductDetails />} />
      <Route exact={true} path="/products" element={<Products />} />
      <Route exact={true} path="/products/:keyword" element={<Products />} />
      <Route exact={true} path="/search" element={<Search />} />
      <Route exact={true} path='/account' element={<Profile  />}/>
      <Route exact={true} path='/me/update' element={<UpdateProfile  />}/>
      <Route exact={true} path="/login" element={<LoginSignUp />} />
      <Route exact={true} path="/cart" element={<Cart />} />
      <Route exact={true} path='/password/update' element={<UpdatePassword  />}/>
      <Route exact={true} path='/password/forgot' element={<ForgotPassword  />}/>
      <Route exact={true} path='/password/reset/:token' element={<ResetPassword  />}/>
      <Route exact={true} path='/login/shipping' element={<Shipping />}/>
      <Route exact={true} path='/order/confirm' element={<ConfirmOrder />}/>
       <Route exact={true} path='/success' element={<OrderSuccess />}/> 
       <Route exact={true} path='/orders' element={<MyOrders />}/> 
       <Route exact={true} path='/order/:id' element={<OrderDetails />}/> 
       <Route isAdmin={true} exact={true} path='/admin/dashboard' element={<Dashboard />}/>
       <Route isAdmin={true} exact={true} path='/admin/products' element={<ProductList />}/> 
       <Route isAdmin={true} exact={true} path='/admin/product' element={<NewProduct />}/> 
       <Route isAdmin={true} exact={true} path='/admin/product/:id' element={<UpdateProduct />}/> 
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
