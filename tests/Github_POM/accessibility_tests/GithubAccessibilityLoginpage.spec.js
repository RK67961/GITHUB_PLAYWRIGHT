import { test, expect } from '../fixtures';
import AxeBuilder from '@axe-core/playwright';

test('Verify GitHub login page accessibility ', async ({ page }) => {

  await page.goto('https://github.com/login');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  console.log(`Login Page Violations: ${results.violations.length}`);

  expect(results.violations).toHaveLength(0);
});