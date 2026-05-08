const { expect } = require('@playwright/test');
const BasePage = require('./base.page');
const CartTableComponent = require('../components/cart/cart-table.component');
const { parsePrice } = require('../../utils/price.util');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartTable = new CartTableComponent(page);
  }

  get cartTotal() {
    return this.page.getByTestId('cart-total');
  }

  async expectCartHasProducts() {
    await this.cartTable.expectHasProducts();
  }

  async getCartTotal() {
    const totalText = await this.cartTotal.textContent();
    return parsePrice(totalText);
  }

  async expectTotalMatchesFirstProductPrice() {
    const firstProductPrice = await this.cartTable.getFirstProductPrice();
    const cartTotal = await this.getCartTotal();

    expect(cartTotal).toBeCloseTo(firstProductPrice);
  }
}

module.exports = CartPage;