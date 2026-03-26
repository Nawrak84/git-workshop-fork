import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/testData';

test.describe('Logout flow', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.validUser.email, users.validUser.password);
    await page.waitForURL(/dashboard/);
  });

  test('should show logout entry point for authenticated user', async ({ page }) => {
    await page.goto('/web/index.php/dashboard/index');
    await page.locator('.oxd-userdropdown-tab').click();
    await expect(page.locator('a[href="/web/index.php/auth/logout"]')).toBeVisible();
  });
});
