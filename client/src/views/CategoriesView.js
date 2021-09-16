import '../styles/views/CategoriesView.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoriesView = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/categories');
      setCategories(data.categories);
    };
    fetchData();
  }, []);

  if (!categories) {
    return <div>Categories Not Found</div>;
  }

  return (
    <>
      <h1>Categories Page</h1>
      <Link to='/'>Back to Home</Link>
      <div className='row center'>
        <ul>
          {categories.map((category) => (
            <li>
              <p>{category.name}</p>
              <p>{category.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesView;
