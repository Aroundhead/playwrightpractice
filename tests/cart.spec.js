const { test, expect } = require('@playwright/test');

test('User views items in the shopping cart', async ({ page }) => {
  await page.goto('/');

  const product = page.locator('[data-test^="product-"]').first();
  await product.click();

  const addToCart = page.locator('[data-test="add-to-cart"]');
  await expect(addToCart).toBeVisible();
  await addToCart.click();

  await page.locator('[data-test="nav-cart"]').click();

  const rows = page.locator('tbody tr');
  await expect(rows.first()).toBeVisible();

  const priceText = await rows.first().locator('td').nth(2).textContent();
  const price = parseFloat(priceText.replace('$', ''));

  const totalText = await page.locator('[data-test="cart-total"]').textContent();
  const total = parseFloat(totalText.replace('$', ''));

  expect(total).toBeCloseTo(price);
});