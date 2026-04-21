import { test, expect } from '@playwright/test';

test('hover over username in GitHub', async ({ page }) => {
  
  // Step 1: Login
//   await page.goto('https://github.com/login');
//   await page.getByRole('textbox', { name: 'Username or email address' }).fill(process.env.GHUB_USERNAME);
//   await page.getByRole('textbox', { name: 'Password' }).fill(process.env.GHUB_PASSWORD);
//   await page.getByRole('button', { name: 'Sign in', exact: true }).click();
//   await page.waitForURL('https://github.com/', { timeout: 20000 });
//   await page.setViewportSize({ width: 1600, height: 1080 });
//   console.log('User is successfully logged in');
 await page.goto('https://github.com/login');
  //await page.waitForLoadState('networkidle');
 console.log(await page.url());
  const usernameLink = page.locator('a[data-hovercard-type="user"]').first();
  await usernameLink.waitFor({ state: 'visible',timeout: 10000 });
  const username = await usernameLink.textContent();
  console.log('Found username in feed:',username);
  await usernameLink.hover();
  await page.waitForTimeout(2000);
  console.log('Hovering over username');
  const hovercard = page.locator('tool-tip[role="tooltip"]').first();
  await hovercard.waitFor({ state: 'attached', timeout: 5000 });
  expect(page.getByText("Engineering Lead at Google working on Chrome & Web Platform")).toBeVisible();
});