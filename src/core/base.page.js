const NavbarComponent = require('../components/common/navbar.component');

class BasePage {
  constructor(page, url = '/') {
    this.page = page;
    this.url = url;

    this.navbar = new NavbarComponent(page);
  }

  async open() {
    await this.page.goto(this.url);
  }
}

module.exports = BasePage;