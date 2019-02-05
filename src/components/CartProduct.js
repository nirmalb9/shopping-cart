import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';




const styles = theme => ({
  card: {
    minWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 15,
  },
  pos: {
    marginBottom: 12,
  },
});

class CardProduct extends Component {
  constructor(props){
    super(props)
    this.removeFromCart = this.removeFromCart.bind(this)
  }

  removeFromCart(){
    this.props.removeFromCart(this.props.item)
  }

  render(){
    const { classes } = this.props;
    const name = this.props.name;
    const price = this.props.price;

    return(
      <Card className={classes.card}>
        <CardContent>
          <Typography className = {classes.title} color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Typography className = {classes.price} color="textSecondary" gutterBottom>
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={this.removeFromCart} aria-label="Delete" className={classes.margin}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

CardProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardProduct);
