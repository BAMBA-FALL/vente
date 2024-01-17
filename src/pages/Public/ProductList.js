// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import products from './data';
import './productList.css'

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2>Liste des produits</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price} €</p>
            <Link to={`/product-details/${product.id}`}>Détails</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
