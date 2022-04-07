export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories').then((res) => (
    res.json()
  )).catch((err) => console.log(err));
  return api;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = `https://api.mercadolibre.com/sites/MLB/categories${categoryId}${query}`;
  const result = await fetch(api).then((category) => category.json()).catch((err) => (
    console.log(err)));
  return result;
}

export async function getProductsFromQuery(query) {
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const result = await fetch(api).then((category) => category.json()).catch((err) => (
    console.log(err)));
  return result;
}

export async function getProductsFromCategory(categoria) {
  const api = `https://api.mercadolibre.com/sites/MLB/search?category=${categoria}`;
  const result = await fetch(api).then((category) => category.json()).catch((err) => (
    console.log(err)));
  return result;
}
