import '../styles/views/Missing404.css';
import { Link } from 'react-router-dom';

const Missing404 = () => {
  return (
    <>
      <div className='missing'>
        <h2>Page Not Found</h2>
        <p>Well, that's disappointing</p>
        <p>
          <Link to='/'>Visit Our Products</Link>
        </p>
      </div>
    </>
  );
};

export default Missing404;
