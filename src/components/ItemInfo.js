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

const styles = {
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
};

function ItemInfo (props){
  const { classes } = props;
  const name = props.item.title;
  const price = props.item.price;
  const product_sku = props.item.sku;

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
          <Button variant="contained" color="primary">
            Add To Cart
          </Button>
        </div>
      </Card>
    );

    // return (
    //   <Card>
    //     <tr>
    //       <td>{name}</td>
    //       <td>{price}</td>
    //     </tr>
    //
    //     <Button variant="contained" color="primary">
    //         Add To Cart
    //     </Button>
    //     <img
    //       src={require(`./imgs/${product_sku}_1.jpg`)}
    //     />
    //   </Card>
    // // );
}

ItemInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemInfo);
