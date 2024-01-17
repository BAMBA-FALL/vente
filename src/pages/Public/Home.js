import React from 'react';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div>
            <section className="featured-products">
                <h2>Produits en vedette</h2>
                <ProductList />
            </section>
        </div>
    );
};

export default Home;
