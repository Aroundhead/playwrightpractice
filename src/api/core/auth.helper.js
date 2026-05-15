const { apiConfig } = require('../config/api.config');

function getBasicAuthHeader() {
  const { username, password } = apiConfig.credentials;
  const credentials = Buffer.from(`${username}:${password}`).toString('base64');

  return `Basic ${credentials}`;
}

module.exports = {
  getBasicAuthHeader,
};