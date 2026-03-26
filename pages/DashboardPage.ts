import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.oxd-topbar-header-breadcrumb h6');
  }

  async open(): Promise<void> {
    await this.page.goto('/web/index.php/dashboard/index');
  }
}
