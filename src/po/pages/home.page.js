const BasePage = require('./base.page');
const ProductCardComponent = require('../components/product/product-card.component');
const { routes } = require('../../config/routes.config');

class HomePage extends BasePage {
  constructor(page) {
    super(page, routes.home);
    this.productCard = new ProductCardComponent(page);
  }

  async openFirstProduct() {
    await this.productCard.openFirstProduct();
  }
}

module.exports = HomePage;