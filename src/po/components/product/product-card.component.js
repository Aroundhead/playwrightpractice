const { expect } = require('@playwright/test');
const BaseComponent = require('../../../core/base.component');

class ProductCardComponent extends BaseComponent {
  get productCards() {
    return this.getByTestId(/^product-/);
  }

  productCardByIndex(index) {
    return this.productCards.nth(index);
  }

  get firstProductCard() {
    return this.productCardByIndex(0);
  }

  async openFirstProduct() {
    await expect(this.firstProductCard).toBeVisible();
    await this.firstProductCard.click();
  }
}

module.exports = ProductCardComponent;