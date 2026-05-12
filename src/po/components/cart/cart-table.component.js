const { expect } = require('@playwright/test');
const BaseComponent = require('../../../core/base.component');
const { parsePrice } = require('../../utils/price.util');

class CartTableComponent extends BaseComponent {
  get table() {
    return this.getByRole('table');
  }

  get productRows() {
    return this.table.locator('tbody tr');
  }

  get firstProductRow() {
    return this.productRowByIndex(0);
  }

  get cartTotal() {
    return this.table.getByTestId('cart-total');
  }

  productRowByIndex(index) {
    return this.productRows.nth(index);
  }

  productPriceByIndex(index) {
    return this.productRowByIndex(index).getByTestId('product-price');
  }

  async expectHasProducts() {
    await expect(this.firstProductRow).toBeVisible();
  }

  async getParsedPrice(locator) {
    const priceText = await locator.innerText();

    return parsePrice(priceText);
  }

  async getProductPriceByIndex(index) {
    return this.getParsedPrice(this.productPriceByIndex(index));
  }

  async getFirstProductPrice() {
    return this.getProductPriceByIndex(0);
  }

  async getCartTotal() {
    return this.getParsedPrice(this.cartTotal);
  }
}

module.exports = CartTableComponent;