import React, { Component } from 'react';
import logo from '../logo.svg';
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CartProduct from './CartProduct';





class Cart extends Component {
  constructor(){
    super();

    this.state = {
      showMenu: false,
    }

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }


  render(){
    const price = this.state.price;
    const cart_items = this.props.cart;
    var total = 0;
    cart_items.length > 0?
      cart_items.map(item => {
        total += item.price;
      }) : total += 0;
    console.log(cart_items);
    return(
      <div>
        <div>
          <Button onClick={this.toggleDrawer}> CART </Button>
        </div>
        <Drawer anchor="right" open={this.state.showMenu} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer}
          >
            <Typography variant= "h6" color="textPrimary" align="center" gutterBottom>
              Your Cart
            </Typography>
            {cart_items.length>0?
                cart_items.map((item) =>
                  <CartProduct
                    name = {item.title}
                    price = {item.price}
                  />
                ) : null
              }
            <Typography variant = "h6" color="textPrimary" align="center" gutterBottom>
              Total Price: {total}
            </Typography>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Cart;
