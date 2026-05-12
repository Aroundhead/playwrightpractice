const BasePage = require('../../core/base.page');
const LoginFormComponent = require('../components/auth/login-form.component');
const { routes } = require('../config/routes.config');


class LoginPage extends BasePage {
  constructor(page) {
    super(page, routes.login);

    this.loginForm = new LoginFormComponent(page);
  }

  async login(email, password) {
    await this.loginForm.login(email, password);
  }
}

module.exports = LoginPage;