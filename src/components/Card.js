import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  constructor() {
    super();
    this.AddOnCart = this.AddOnCart.bind(this);
  }

  AddOnCart() {
    const { item } = this.props;
    const favorites = JSON.parse(localStorage.getItem('product')) || [];
    favorites.push({
      item: { ...item },
      quantity: 1,
    });
    localStorage.setItem('product', JSON.stringify(favorites));
  }

  render() {
    const { item } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/product/${item.title}` }
          { ...item }
          data-testid="product-detail-link"
        >
          <span>{ item.title }</span>
          <img alt={ item.title } src={ item.thumbnail } />
          <span>{ item.price}</span>
        </Link>
        <button
          type="button"
          onClick={ this.AddOnCart }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  item: PropTypes.shape().isRequired,
};
