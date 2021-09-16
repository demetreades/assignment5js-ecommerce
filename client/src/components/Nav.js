import '../styles/components/Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className='Nav'>
      <h1>Nav Menu</h1>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search: </label>
        <input
          id='search'
          type='text'
          placeholder='Search field!'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/categories'>Categories</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/oti-nane-link-pou-den-einai-ston-router'>
            oti nane endpoint
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
