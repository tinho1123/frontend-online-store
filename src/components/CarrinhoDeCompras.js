import React from 'react';

class CarrinhoDeCompras extends React.Component {
  constructor() {
    super();
    this.state = {
      produto: [],
    };

    this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  async getCart() {
    const getItem = JSON.parse(localStorage.getItem('product'));
    await this.setState({
      produto: getItem,
    });
  }

  render() {
    const { produto } = this.state;
    return (
      <div>
        <section>
          { produto && produto.length > 0 ? (produto.map((pro, index) => (
            <div key={ index }>
              <h1 data-testid="shopping-cart-product-name">{pro.item.title}</h1>
              <h2>{pro.item.price}</h2>
              <p data-testid="shopping-cart-product-quantity">{pro.quantity}</p>
            </div>
          )))
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        </section>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
