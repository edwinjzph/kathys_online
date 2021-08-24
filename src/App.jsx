import { commerce } from "./lib/commerce";
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Products from "./components/products";
import NavBar from "./components/NavBar";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import ProductView from "./components/ProductV";
import './App.css'
import Categories from "./components/Categories";
import Spinner from "./components/Spinner";
import SelectedCategories from "./components/SelectedCategories";
import Search from "./components/Search";





const App = () => {
  const [products, setProducts] = useState([]);
const[basketData,setBasketData]=useState({})
const [categories, setCategories] = useState([]);
const [order, setOrder] = useState({});
const [orderError, setOrderError] = useState("");
  const [loading, setLoading] = useState(true);
  let i = Math.floor(Math.random() * 1000+1)


  const fetchProducts = useCallback(  async () => {
    setLoading(true);
    const response = await commerce.products.list({
      limit: 4,
      page: 1,
    }).finally(() => {
      setLoading(false);
    });
    setProducts((response && response.data) || []);
    
  },[])
 
  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };
 

  const addProduct = async (productId,quantity,varient) => {
    const response = await commerce.cart.add(productId,quantity,varient);
    setBasketData(response.cart);
  };
  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setBasketData(response.cart);
  };
  const fetchCategories = async () => {
    const response = await commerce.categories.list()
    setCategories((response && response.data) || []);
  };

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty();
    setBasketData(response.cart);
  };
  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setBasketData(response.cart);
  };
  const refreshBasket = async () => {
    const newBasketData = await commerce.cart.refresh();
    setBasketData(newBasketData);
  };

  const handleCheckout = async (checkoutId, orderData) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutId, orderData);
      console.log(incomingOrder)
      setOrder(incomingOrder);
      refreshBasket();
    } catch (error) {
      setOrderError(
        (error.data && error.data.error && error.data.error.message) ||
          "There is an error occurred"
      );
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchCategories();
    fetchProducts();
    fetchBasketData().finally(() => {
      setLoading(false);
    });
    return () => {
      setProducts([])
      setBasketData({})
      setCategories([])
    }
  
  }, []);
  if (loading) {
    return   <Spinner />
  }
  return (

  <Router>
   
    <div className="back">
  <NavBar  categories={categories}  basketItems={basketData.total_items}    totalCost={
            (basketData.subtotal &&
              basketData.subtotal.formatted_with_symbol) ||
            "00.00"
          }/>
  
      <Switch>
        <Route exact path="/">
          <Products  categories={categories} products={products} addProduct={addProduct}  />
        </Route>
        <Route exact path="/basket">
    
            <Basket
              basketData={basketData}
              products={products}
              updateProduct={updateProduct}
              handleEmptyBasket={handleEmptyBasket}
              RemoveItemFromBasket={RemoveItemFromBasket}
            />
       
          </Route>
          <Route exact path="/checkout">
            <Checkout 
              orderInfo={order}
              orderError={orderError}
              basketData={basketData}
              handleCheckout={handleCheckout}/>
          </Route>
          <Route exact path="/product-view/:id">
            <ProductView
             key={i}
            product={products}
              addProduct={addProduct}  
              updateProduct={updateProduct}
              RemoveItemFromBasket={RemoveItemFromBasket}
              />
          </Route>
          <Route exact path="/categories/:id">
            <Categories
            fetchProducts={fetchProducts}
               categories={categories}
               products={products}
              />
          </Route>
          <Route exact path="/categoriesview/:id">
       <SelectedCategories
            categories={categories}
            products={products}
       />
          </Route>
          <Route exact path="/search">
       <Search
            categories={categories}
         addProduct={addProduct}
       />
          </Route>
      </Switch>
    </div>
  </Router>)
};

export default App;
