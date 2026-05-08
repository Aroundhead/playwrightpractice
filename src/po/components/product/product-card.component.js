const { expect } = require('@playwright/test');

class ProductCardComponent {
  constructor(page) {
    this.page = page;
  }

  get productCards() {
    return this.page.getByTestId(/^product-/);
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