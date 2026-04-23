const { test, expect } = require('@playwright/test');

test('User views product details information', async ({ page }) => {
  await page.goto('/');

  const product = page.locator('[data-test^="product-"]').first();
  await expect(product).toBeVisible();

  await product.click();

  await expect(page).toHaveURL(/product/);

  const name = page.locator('[data-test="product-name"]');
  const price = page.locator('[data-test="unit-price"]');
  const description = page.locator('[data-test="product-description"]');

  await expect(name).toBeVisible();
  await expect(price).toBeVisible();
  await expect(description).toBeVisible();
});