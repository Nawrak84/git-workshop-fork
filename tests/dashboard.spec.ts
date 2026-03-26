import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/testData';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.validUser.email, users.validUser.password);
    await page.waitForURL(/dashboard/);
  });

  test('should display dashboard title', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.open();
    await expect(dashboardPage.title).toBeVisible();
  });
});
