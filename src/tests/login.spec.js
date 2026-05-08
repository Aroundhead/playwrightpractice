const { test } = require('@playwright/test');
const { pages } = require('../po');

test('Registered user signs in with valid credentials', async ({ page }) => {
  const app = pages(page);

  await app.login.open();
  await app.login.loginAsCustomer();

  await app.account.expectAccountPageOpened();
});