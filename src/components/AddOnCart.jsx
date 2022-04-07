import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddOnCart extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{product.item.title}</h1>
        <h2>{product.item.price}</h2>
        <p>{`Quantidades disponíveis: ${product.item.installments.quantity}`}</p>
        <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
      </div>
    );
  }
}

AddOnCart.propTypes = {
  product: PropTypes.func.isRequired,
};
