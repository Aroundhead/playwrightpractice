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
}

module.exports = BaseComponent;