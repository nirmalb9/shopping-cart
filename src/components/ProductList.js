import React, { Component } from 'react';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Icon } from 'semantic-ui-react';
import ItemInfo from './ItemInfo';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ProductList extends Component {
  state = {
    spacing: '12',
  };

  render(){
    const items = [];
    const {spacing} = this.state;
    const {classes} = this.props;
    const {products} = this.props;

    if (products.length>0){
      return(
        <Grid container className={classes.root} spacing={12}>
              {products.map((product) =>
                <Grid item md={4}>
                  <ItemInfo
                    item = {product}
                    addToCart = {this.props.addToCart}
                  />
                </Grid>
            )}
        </Grid>
      );
    } else {
        return(
          products.map((product) => null)
        );
    }
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);
