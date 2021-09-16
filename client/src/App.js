import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Main components
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
// Views
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import CategoriesView from './views/CategoriesView';
import Missing404 from './views/Missing404';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className='App'>
      <Header title='MERN eCommerce' />
      <Nav search={search} setSearch={setSearch} />
      <main>
        <Switch>
          <Route path='/categories' component={CategoriesView} />
          <Route path='/about' component={About} />

          <Route path='/:product_id' component={ProductView} />
          <Route path='/' component={HomeView} exact />

          {/* den doulevei akoma to Missing */}
          {/* <Route path='*' component={Missing404} /> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /*
<Route path='/' component={HomeScreen} exact />
<Route path='/admin/productlist' component={ProductListScreen} exact />;
<Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />;
<Route path='/admin/product/:id/edit' component={ProductEditScreen} />
<Route path='/admin/orderlist' component={OrderListScreen} />
<Route path='/search/:keyword' component={HomeScreen} exact />
<Route path='/page/:pageNumber' component={HomeScreen} exact />
<Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
<Route path='/order/:id' component={OrderScreen} />
<Route path='/shipping' component={ShippingScreen} />
<Route path='/payment' component={PaymentScreen} />
<Route path='/login' component={LoginScreen} />
<Route path='/register' component={RegisterScreen} />
<Route path='/profile' component={ProfileScreen} />
<Route path='/product/:id' component={ProductScreen} />
<Route path='/cart/:id?' component={CartScreen} />
<Route path='/admin/userlist' component={UserListScreen} />
<Route path='/admin/user/:id/edit' component={UserEditScreen} />  
*/
}
