const { users } = require('../../po/config/users.config');
async function loginAsCustomer(app) {
  await app.login.open();

  await app.login.login(
    users.customer.email,
    users.customer.password
  );
}

module.exports = {
  loginAsCustomer,
};