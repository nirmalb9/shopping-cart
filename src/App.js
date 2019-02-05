import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Icon } from 'semantic-ui-react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {console.log(this.state.data)}
        <Shopping products={this.state.data} />
      </div>
    );
  }

  componentDidMount(){
    import('../src/products.json').then(json =>
      {this.setState({ data: json })});
  }

}

class ItemInfo extends Component {
  render(){
    const name = this.props.item.title;
    const price = this.props.item.price;
    const product_sku = this.props.item.sku;
    return (
      <Card>
        <tr>
          <td>{name}</td>
          <td>{price}</td>
        </tr>

        <Button variant="contained" color="primary">
            Add To Cart
        </Button>
        <img
          src={require(`../src/imgs/${product_sku}_1.jpg`)}
        />
      </Card>
    );
  }
}

class ProductList extends Component {
  render(){
    const items = [];
    const products = [this.props.products];
    if (products.length>0){
      return(
        products.map((product) => {
                return items.push(
                  <ItemInfo
                      item={product}
                  />
                )
        })
      )
    } else {
      return(
        products.map((product) => null)
      )
    }


  };
}


class Cart extends Component {
  render(){
    return (
      <Icon name ='cart plus' />
    )
  }
}

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


export default App;
