const { test, expect } = require('@playwright/test');

test('Registered user signs in with valid credentials', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/account/);
});