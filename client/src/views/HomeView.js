import '../styles/views/HomeView.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Product from '../components/Product';

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('api/products');
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='home-view'>
        <h1>Home Page (main Shop)</h1>
        <div>
          <div className='row center'>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
