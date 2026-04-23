const { test, expect } = require('@playwright/test');

test('Logged-in user signs out of the application', async ({ page }) => {
  await page.goto('/auth/login');

  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/account/);

  await page.locator('[data-test="nav-menu"]').click();
  await page.locator('[data-test="nav-sign-out"]').click();

  await expect(page).toHaveURL(/login/);
});