// ProductDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from './data';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const { image, name, price } = product;

  return (
    <div className="product-details-container">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price} €</p>
      <Link to='/'>Retour aux produits</Link>
    </div>
  );
};

export default ProductDetails;
