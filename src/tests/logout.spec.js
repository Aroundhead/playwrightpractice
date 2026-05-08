const { test } = require('@playwright/test');
const { pages } = require('../po');

test('Logged-in user signs out of the application', async ({ page }) => {
  const app = pages(page);

  await app.login.open();
  await app.login.loginAsCustomer();

  await app.account.expectAccountPageOpened();

  await app.account.navbar.signOut();

  await app.login.expectLoginPageOpened();
});