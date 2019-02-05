import React, { Component } from 'react';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Cart from './Cart';
import ProductList from './ProductList'



class Shopping extends Component {
  render() {
    return (
      <div>
        <Cart />
        <ProductList products={this.props.products} />
      </div>
    )
  }
}

export default Shopping;
