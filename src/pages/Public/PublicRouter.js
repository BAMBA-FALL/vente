import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Layout, Home, Service, Contact, ShoppingCart } from '../Public'
import Error from '../../_Utiles/Error'
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="home" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="/product-details/:productId" element={<ProductDetails />} />
           
          </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default PublicRouter;