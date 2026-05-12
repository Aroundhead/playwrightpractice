const { test, expect } = require('@playwright/test');
const { pages } = require('../po');

test('User views product details information', async ({ page }) => {
  const app = pages(page);

  await app.home.openFirstProductDetails();

  await expect(page).toHaveURL(/product/);
  await expect(app.productDetails.productName).toBeVisible();
  await expect(app.productDetails.productPrice).toBeVisible();
  await expect(app.productDetails.productDescription).toBeVisible();
});