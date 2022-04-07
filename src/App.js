import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainArea from './components/MainArea';
import CarrinhoDeCompras from './components/CarrinhoDeCompras';
import DetailProduct from './components/DetailProduct';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ MainArea } />
            <Route
              path="/product/:query"
              render={ (props) => <DetailProduct { ...props } /> }
            />
            <Route exact path="/carrinhodecompras" component={ CarrinhoDeCompras } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
