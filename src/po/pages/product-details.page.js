const BasePage = require('../../core/base.page');

class ProductDetailsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get productName() {
    return this.page.getByTestId('product-name');
  }

  get productPrice() {
    return this.page.getByTestId('unit-price');
  }

  get productDescription() {
    return this.page.getByTestId('product-description');
  }

  get addToCartButton() {
    return this.page.getByTestId('add-to-cart');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = ProductDetailsPage;