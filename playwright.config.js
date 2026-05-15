const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src',
  retries: 2,
  workers: 2,

  reporter: [['html', { open: 'never' }]],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://practicesoftwaretesting.com',
    testIdAttribute: 'data-test',
  },

  projects: [
    {
      name: 'api',
      testMatch: 'api/tests/**/*.spec.js',
    },
    {
      name: 'chromium',
      testMatch: 'tests/**/*.spec.js',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      testMatch: 'tests/**/*.spec.js',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      testMatch: 'tests/**/*.spec.js',
      use: { browserName: 'webkit' },
    },
  ],
});