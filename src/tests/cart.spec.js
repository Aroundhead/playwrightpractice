const { test, expect } = require('@playwright/test');
const { pages } = require('../po');

test('User views items in the shopping cart', async ({ page }) => {
  const app = pages(page);

  await app.home.open();

  await expect(app.home.productCard.firstProductCard).toBeVisible();
  await app.home.openFirstProduct();

  await expect(app.productDetails.addToCartButton).toBeVisible();
  await app.productDetails.addProductToCart();

  await app.navbar.openCart();

  await app.cart.cartTable.expectHasProducts();

  const firstProductPrice = await app.cart.cartTable.getFirstProductPrice();
  const cartTotal = await app.cart.cartTable.getCartTotal();

  expect(cartTotal).toBeCloseTo(firstProductPrice);
});