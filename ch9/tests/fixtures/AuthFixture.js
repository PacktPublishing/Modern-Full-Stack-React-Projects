export class AuthFixture {
  constructor(page) {
    this.page = page
  }

  async signUpAndLogIn() {
    const testUser = 'test' + Date.now()
    await this.page.goto('http://localhost:5173/signup')
    await this.page.getByLabel('Username:').fill(testUser)
    await this.page.getByLabel('Password:').fill('password')
    await this.page.getByRole('button', { name: 'Sign Up' }).click()
    await this.page.waitForURL('**/login')
    await this.page.getByLabel('Username:').fill(testUser)
    await this.page.getByLabel('Password:').fill('password')
    await this.page.getByRole('button', { name: 'Log In' }).click()
    await this.page.waitForURL('**/')
  }
}
