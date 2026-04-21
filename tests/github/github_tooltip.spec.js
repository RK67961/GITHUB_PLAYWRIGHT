import { test, expect } from '@playwright/test';

test('verify tooltip visibility for repository @user2', async ({ page }) => {
//   await page.goto('https://github.com/login');
//   await page.getByRole('textbox',{name:'Username or email address' }).fill(process.env.GHUB_USERNAME);
//   await page.getByRole('textbox',{name:'Password' }).fill(process.env.GHUB_PASSWORD);
//   await page.getByRole('button',{name:'Sign in', exact: true }).click();
//   await page.waitForURL('/github.com/', { timeout: 20000 });
//   console.log('User is successfully logged in');
  await page.goto('https://github.com/microsoft/vscode');
  await page.waitForLoadState('domcontentloaded');
const pathLink = page.getByRole('link', { name: 'agents/skills/launch' });
await pathLink.scrollIntoViewIfNeeded();
  await expect(pathLink).toBeVisible();
  await pathLink.hover();
  //const tooltip = page.getByRole('tooltip');
//   const tooltip = page.getByRole('link', { name: 'This path skips through empty directories' });
//   await expect(tooltip).toBeVisible();
//   await expect(tooltip).toHaveText(/skips through empty directories/i,{ timeout: 10000 });
 await expect(pathLink).toHaveAttribute('title','This path skips through empty directories');
});