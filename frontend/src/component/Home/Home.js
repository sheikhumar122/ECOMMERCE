import React, { Fragment, useEffect } from "react";
import {CgMouse} from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
//import image from "../images/image.jpg";
import MetaData from "../Layout/MetaData";
import {  useDispatch, useSelector} from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Layout/Loader/loader";
import { useAlert } from "react-alert";




const Home = ()=>{
   const alert = useAlert();
    const dispatch = useDispatch();
  const { loading, error, products} = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
      
    }
    dispatch(getProduct());
  }, [dispatch,alert,error]);
    return (
    <Fragment>
      {loading ? <Loader/>
        
       : 
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <h2>Welcome To NovBhar</h2>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      }
    </Fragment>
  );
};

export default Home;