const BaseComponent = require('../../../core/base.component');

class NavbarComponent extends BaseComponent {
  get navigationItems() {
    return {
      cart: 'nav-cart',
      menu: 'nav-menu',
      signOut: 'nav-sign-out',
      signIn: 'nav-sign-in',
    };
  }

  item(name) {
    const testId = this.navigationItems[name];

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
}

module.exports = NavbarComponent;