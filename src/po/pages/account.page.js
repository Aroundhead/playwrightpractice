const { expect } = require('@playwright/test');
const BasePage = require('./base.page');
const { routes } = require('../../config/routes.config');

class AccountPage extends BasePage {
  constructor(page) {
    super(page, routes.account);
  }

  get accountTitle() {
    return this.page.getByRole('heading', { name: /Mi cuenta|My account/i });
  }

  async expectAccountPageOpened() {
    await expect(this.page).toHaveURL(/account/);
    await expect(this.accountTitle).toBeVisible();
  }
}

module.exports = AccountPage;