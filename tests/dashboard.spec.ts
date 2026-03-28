import * as test from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../fixtures/testData";

test.test.describe("Dashboard", () => {
  test.test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.validUser.email, users.validUser.password);
    await page.waitForURL(/dashboard/);
  });

  test.test("should display dashboard title", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.open();
    await test.expect(dashboardPage.title).toBeVisible();
  });
});
