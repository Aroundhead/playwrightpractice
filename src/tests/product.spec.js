const { test } = require('@playwright/test');
const { pages } = require('../po');

test('User views product details information', async ({ page }) => {
  const app = pages(page);

  await app.home.open();
  await app.home.openFirstProduct();

  await app.productDetails.expectProductDetailsPageOpened();
  await app.productDetails.expectProductInformationVisible();
});