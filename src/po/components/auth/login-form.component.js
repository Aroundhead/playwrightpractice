class LoginFormComponent {
  constructor(page) {
    this.page = page;
  }

  get root() {
    return this.page.getByTestId('login-form');
  }

  get emailInput() {
    return this.root.getByTestId('email');
  }

  get passwordInput() {
    return this.root.getByTestId('password');
  }

  get submitButton() {
    return this.root.getByRole('button', { name: /Login|Iniciar sesión/i });
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submit();
  }
}

module.exports = LoginFormComponent;