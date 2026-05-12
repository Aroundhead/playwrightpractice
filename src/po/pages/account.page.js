const BasePage = require('../../core/base.page');
const { routes } = require('../config/routes.config');

class AccountPage extends BasePage {
  constructor(page) {
    super(page, routes.account);
  }

  get accountTitle() {
    return this.page.getByRole('heading', { name: /Mi cuenta|My account/i });
  }
}

module.exports = AccountPage;