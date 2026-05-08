const HomePage = require('./pages/home.page');
const LoginPage = require('./pages/login.page');
const AccountPage = require('./pages/account.page');
const ProductDetailsPage = require('./pages/product-details.page');
const CartPage = require('./pages/cart.page');

function pages(page) {
  return {
    home: new HomePage(page),
    login: new LoginPage(page),
    account: new AccountPage(page),
    productDetails: new ProductDetailsPage(page),
    cart: new CartPage(page),
  };
}

module.exports = { pages };