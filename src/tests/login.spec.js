const { test, expect } = require('@playwright/test');
const { pages } = require('../po');
const { loginAsCustomer } = require('./helpers/auth.helper');

test('Registered user signs in with valid credentials', async ({ page }) => {
  const app = pages(page);

  await loginAsCustomer(app);

  await expect(page).toHaveURL(/account/);
  await expect(app.account.accountTitle).toBeVisible();
});