import React, { Component } from 'react';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Cart from './Cart';
import ProductList from './ProductList'
import ButtonAppBar from './appBar'




class Shopping extends Component {
  constructor(props){
    super();

    this.state = {
      cart: [],
    };

    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(product){
    var next = [];
    if (this.state.cart.length == 0){
      next.push(product);
    }
    else {
      this.state.cart.map(item => {
        next.push(item);
      })
      next.push(product);
    }
    this.setState({
      cart: next,
    })
  }



  render() {
    return (
      console.log(this.state.cart),
      <div>
        <ButtonAppBar
          cart={this.state.cart}
        />
        <ProductList
          products={this.props.products}
          addToCart={this.addToCart}
        />
      </div>
    )
  }

  // componentDidMount(){
  //   this.setState({
  //     cart: this.props.products.slice(0,2),
  //   })
  // }
}

export default Shopping;
