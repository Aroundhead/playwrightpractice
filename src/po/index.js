const HomePage = require('./pages/home.page');
const LoginPage = require('./pages/login.page');
const AccountPage = require('./pages/account.page');
const ProductDetailsPage = require('./pages/product-details.page');
const CartPage = require('./pages/cart.page');
const NavbarComponent = require('./components/common/navbar.component');

function pages(page) {
  return {
    home: new HomePage(page),
    login: new LoginPage(page),
    account: new AccountPage(page),
    productDetails: new ProductDetailsPage(page),
    cart: new CartPage(page),
    navbar: new NavbarComponent(page),
  };
}

module.exports = { pages };