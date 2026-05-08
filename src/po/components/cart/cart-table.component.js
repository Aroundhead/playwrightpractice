const { expect } = require('@playwright/test');
const { parsePrice } = require('../../../utils/price.util');

class CartTableComponent {
  constructor(page) {
    this.page = page;
    this.table = page.getByRole('table');
  }

  get rows() {
    return this.table.getByRole('row');
  }

  productRowByIndex(index) {
    return this.rows.nth(index + 1);
  }

  get firstProductRow() {
    return this.productRowByIndex(0);
  }

  async expectHasProducts() {
    await expect(this.firstProductRow).toBeVisible();
  }

  async getProductPriceByIndex(index) {
    const priceText = await this.productRowByIndex(index)
      .getByRole('cell')
      .nth(2)
      .innerText();

    return parsePrice(priceText);
  }

  async getProductTotalByIndex(index) {
    const totalText = await this.productRowByIndex(index)
      .getByTestId('cart-total')
      .innerText();

    return parsePrice(totalText);
  }

  async getFirstProductPrice() {
    return this.getProductPriceByIndex(0);
  }

  async getFirstProductTotal() {
    return this.getProductTotalByIndex(0);
  }
}

module.exports = CartTableComponent;