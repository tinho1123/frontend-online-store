import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories,
  getProductsFromQuery,
  getProductsFromCategory } from '../services/api';
import Card from './Card';

class MainArea extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      categories: [],
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.queryButton = this.queryButton.bind(this);
    this.categoryButton = this.categoryButton.bind(this);
  }

  componentDidMount() {
    this.categorias();
  }

  handleChange({ target }) {
    this.setState({
      inputValue: target.value,
    });
  }

  async queryButton() {
    const productsArray = await getProductsFromQuery();
    this.setState({
      products: productsArray.results,
    });
  }

  async categoryButton() {
    const productsArray = await getProductsFromCategory();
    this.setState({
      products: productsArray.results,
    });
  }

  async categorias() {
    const categoriesArray = await getCategories();
    this.setState({
      categories: categoriesArray,
    });
  }

  render() {
    const { inputValue, categories, products } = this.state;
    const searchProducts = products.length > 0
      ? products.map((product, index) => <Card item={ product } key={ index } />)
      : (
        <div
          data-testid="product"
        >
          <p>Nenhum produto foi encontrado</p>
        </div>);
    return (
      <div>
        <section className="categories">
          { categories
            .map((category) => (
              <button
                type="button"
                data-testid="category"
                key={ category.id }
                onClick={ this.categoryButton }
              >
                { category.name }
              </button>)) }
        </section>
        <section>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <form>
            <input
              type="text"
              data-testid="query-input"
              onChange={ this.handleChange }
            />
            <button
              onClick={ this.queryButton }
              data-testid="query-button"
              type="button"
            >
              Query Button
            </button>
          </form>
          <Link
            items={ inputValue }
            to="/carrinhodecompras"
            data-testid="shopping-cart-button"
          >
            <button type="button">
              Shopping Cart Button
            </button>
          </Link>
        </section>
        <section>
          { searchProducts }
        </section>
      </div>
    );
  }
}

export default MainArea;
