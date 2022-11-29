import React from 'react';
import {connect} from 'react-redux'
import NavBar         from './components/NavBar';
import {Routes,Route} from 'react-router-dom'
import HomePage       from './pages/HomePage';
import ProductPage    from './pages/ProductPage';
import CartPage       from './pages/CartPage';
import AddProduct     from './components/AddProduct';
import { fetchProducts } from './actions/products';
import ProductDetailsPage from './components/ProductDetailsPage';
import './styles/App.css';


class App extends React.Component {   
  async componentDidMount(){
    await this.props.dispatch(fetchProducts())
  }

  render() {   
    return (
      <div>   
       <NavBar cartList={this.props.store.cartItems}/>
      <Routes>
       <Route exact path="/" element={<ProductPage/>}/>
       <Route path='/product' element={<ProductPage/>}/>
       <Route path='/cart' element={<CartPage/>} />
       <Route path='/add-product' element={<AddProduct/>}/>
       <Route path='product-details/:id' element={<ProductDetailsPage/>}/>
      </Routes>
      </div>
     );
  }
}

function mapStateToProps(store){
  return{
      store
  }
}
export default connect(mapStateToProps)(App)