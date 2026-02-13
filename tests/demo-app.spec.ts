import { test, expect } from '@playwright/test';
import { helper } from './helper';
import testData from './test-data.json';

interface TestCase {
  id: string;
  description: string;
  projectName: string;
  taskTitle: string;
  columnName: string;
  tags: string[];
}

const testCases = (testData as { testCases: TestCase[] }).testCases;

test.describe.serial('Demo App', () => {
  test('Login', async ({ page }) => {
    await helper.login(page);
  });

  for (const testCase of testCases) {
    test(`Test case ${testCase.id}: ${testCase.description}`, async ({ page }) => {
      await helper.login(page);
      await page.getByRole('button', { name: new RegExp(testCase.projectName, 'i') }).click();
      const column = page.getByRole('heading', { name: testCase.columnName }).locator('..');
      const taskCard = column.getByRole('heading', { name: testCase.taskTitle }).locator('..');

      await expect(
        taskCard,
        `Task "${testCase.taskTitle}" should be visible in column "${testCase.columnName}"`
      ).toBeVisible();

      for (const tag of testCase.tags) {
        await expect(
          taskCard.getByText(tag, { exact: true }),
          `Tag "${tag}" should be present on task "${testCase.taskTitle}"`
        ).toBeVisible();
      }
    });
  }
});
