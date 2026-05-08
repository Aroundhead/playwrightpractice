const { expect } = require('@playwright/test');
const BasePage = require('./base.page');
const LoginFormComponent = require('../components/auth/login-form.component');
const { routes } = require('../../config/routes.config');
const { users } = require('../../config/users.config');

class LoginPage extends BasePage {
  constructor(page) {
    super(page, routes.login);

    this.loginForm = new LoginFormComponent(page);
  }

  async login(email, password) {
    await this.loginForm.login(email, password);
  }

  async loginAsCustomer() {
    await this.login(users.customer.email, users.customer.password);
  }

  async expectLoginPageOpened() {
    await expect(this.page).toHaveURL(/login/);
  }
}

module.exports = LoginPage;