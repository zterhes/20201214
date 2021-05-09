import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../ProductList';
import { Button, Modal } from 'react-bootstrap';

export default () => {
  const [products, setProducts] = useState();
  useEffect(async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Our products</h1>
      <div className='container'>
        <div class='row align-items-start'>
          {products ? (
            products.map(product => (
              <ProductList product={product} key={product.id} />
            ))
          ) : (
            <>Wait for out products...</>
          )}
        </div>
      </div>
    </div>
  );
};
