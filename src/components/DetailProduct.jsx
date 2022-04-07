import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductsFromQuery } from '../services/api';

import Loading from './Loading';

export default class DetailProduct extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      product: [],
    };

    this.getCategory = this.getCategory.bind(this);
    this.addOnCart = this.addOnCart.bind(this);
  }

  componentDidMount() {
    const { match: { params: { query } } } = this.props;
    this.getCategory(query);
  }

  getCategory(q) {
    this.setState({
      loading: true,
    }, async () => {
      const information = await getProductsFromQuery(q);
      this.setState({
        loading: false,
        product: information.results[0],
      });
    });
  }

  addOnCart() {
    const { product } = this.state;
    const produto = JSON.parse(localStorage.getItem('product')) || [];
    produto.push({
      item: { ...product },
      quantity: 1,
    });
    localStorage.setItem('product', JSON.stringify(produto));
  }

  render() {
    const { loading, product } = this.state;

    return (loading ? <Loading /> : (
      <div>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addOnCart }
        >
          Adicionar ao carrinho de compras
        </button>
        <Link
          to="/carrinhodecompras"
          data-testid="shopping-cart-button"
        >
          <button type="button">Shopping Cart Button</button>
        </Link>
      </div>
    ));
  }
}

DetailProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string,
    }),
  }).isRequired,
};
