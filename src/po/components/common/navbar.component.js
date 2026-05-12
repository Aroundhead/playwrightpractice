const BaseComponent = require('../../../core/base.component');

const NAVIGATION_ITEMS = {
  cart: 'nav-cart',
  menu: 'nav-menu',
  signOut: 'nav-sign-out',
  signIn: 'nav-sign-in',
};

class NavbarComponent extends BaseComponent {
  item(name) {
    const testId = NAVIGATION_ITEMS[name];

    if (!testId) {
      throw new Error(`Navigation item "${name}" does not exist`);
    }

    return this.getByTestId(testId);
  }

  async openCart() {
    await this.item('cart').click();
  }

  async openUserMenu() {
    await this.item('menu').click();
  }

  async signOut() {
    await this.openUserMenu();
    await this.item('signOut').click();
  }

  async openSignIn() {
    await this.item('signIn').click();
  }
}

module.exports = NavbarComponent;