import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Icon } from 'semantic-ui-react';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class ItemInfo extends Component {
  constructor(props){
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(){
    this.props.addToCart(this.props.item)
  }

  render(){
    const { classes } = this.props;
    const name = this.props.item.title;
    const price = this.props.item.price;
    const product_sku = this.props.item.sku;

    return(
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image = {require(`../imgs/${product_sku}_1.jpg`)}
          // image={require(`./imgs/${product_sku}_1.jpg`)}
        />
        <div className={classes.details}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="colorPrimary">
            ${price}
          </Typography>
          <Button onClick={this.addToCart} variant="contained" color="primary">
            Add To Cart
          </Button>
        </div>
      </Card>
    );
  }
}

ItemInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemInfo);
