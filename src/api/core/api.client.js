const request = require('supertest');
const { apiConfig } = require('../config/api.config');

const apiClient = request(apiConfig.baseUrl);

module.exports = {
  apiClient,
};