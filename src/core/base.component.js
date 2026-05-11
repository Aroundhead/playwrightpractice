class BaseComponent {
  constructor(page) {
    this.page = page;
  }

  getByTestId(testId) {
    return this.page.getByTestId(testId);
  }

  getByRole(role, options) {
    return this.page.getByRole(role, options);
  }

  locator(selector) {
    return this.page.locator(selector);
  }
}

module.exports = BaseComponent;