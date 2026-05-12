const { test, expect } = require('@playwright/test');
const { pages } = require('../po');
const { loginAsCustomer } = require('./helpers/auth.helper');

test('Logged-in user signs out of the application', async ({ page }) => {
  const app = pages(page);

  await loginAsCustomer(app);

  await expect(page).toHaveURL(/account/);
  await expect(app.account.accountTitle).toBeVisible();

  await app.navbar.signOut();
  await expect(page).toHaveURL(/login/);
});