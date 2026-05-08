const { expect } = require('@playwright/test');
const BasePage = require('./base.page');

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

  async expectProductDetailsPageOpened() {
    await expect(this.page).toHaveURL(/product/);
  }

  async expectProductInformationVisible() {
    await expect(this.productName).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.productDescription).toBeVisible();
  }

  async addProductToCart() {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
  }
}

module.exports = ProductDetailsPage;