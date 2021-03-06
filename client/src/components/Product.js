import '../styles/components/Product.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
  const { product } = props;
  return (
    <div key={product._id} className='card'>
      <Link to={`/api/products/${product._id}`}>
        <img className='medium' src={product.image} alt={product.name} />
      </Link>
      <div className='card-body'>
        <Link to={`/api/products/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className='price'>{product.price}$</div>
        <p>{product.inStock}$</p>
      </div>
    </div>
  );
};

export default Products;
