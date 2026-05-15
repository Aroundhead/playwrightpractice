const apiConfig = {
  baseUrl: 'https://restful-booker.herokuapp.com',

  credentials: {
    username: 'admin',
    password: 'password123',
  },

  headers: {
    acceptJson: {
      Accept: 'application/json',
    },

    json: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },

  responseTimeLimit: 2000,
};

module.exports = {
  apiConfig,
};