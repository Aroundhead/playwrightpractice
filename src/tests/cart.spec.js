const { test } = require('@playwright/test');
const { pages } = require('../po');

test('User views items in the shopping cart', async ({ page }) => {
  const app = pages(page);

  await app.home.open();
  await app.home.openFirstProduct();

  await app.productDetails.addProductToCart();
  await app.productDetails.navbar.openCart();

  await app.cart.expectCartHasProducts();
  await app.cart.expectTotalMatchesFirstProductPrice();
});