import { Page } from '@playwright/test';
import { selectors } from './selectors';

export const helper = {
  async login(page: Page) {
    await page.goto('/');
    await page.locator(selectors.login.username).fill('admin');
    await page.locator(selectors.login.password).fill('password123');
    await page.getByRole('button', { name: selectors.login.signInButton }).click();
    await page.getByText('Web Application').first().waitFor({ state: 'visible', timeout: 15000 });
  },
};
