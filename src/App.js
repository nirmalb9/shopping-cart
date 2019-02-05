import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
import Shopping from './components/Shopping'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    if (this.state.data.length > 0){
      return (
        <div className="App">
          <Shopping products={this.state.data} />
        </div>
      );
    } else {
      return (
        <div>
        </div>
      )
    }
  }

  componentDidMount(){
    import('./products.json').then(json =>
      {this.setState({ data: json.products })});
  }
}




export default App;
