import { test, expect } from './fixtures/index.js'

test('allows creating a new post', async ({ page, auth }) => {
  const testUser = await auth.signUpAndLogIn()

  await page.getByLabel('Title:').click()
  await page.getByLabel('Title:').fill('Test Post')
  await page.getByLabel('Title:').press('Tab')
  await page.locator('textarea').fill('Hello World!')
  await page.locator('textarea').press('Tab')
  await page.getByRole('button', { name: 'Create' }).press('Enter')

  await expect(page.getByText(`Test PostWritten by ${testUser}`)).toBeVisible()
})
