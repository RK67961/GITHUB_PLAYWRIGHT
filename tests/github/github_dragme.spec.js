import {test, expect} from '@playwright/test'
test('verify drag and drop in Github @user1',async({page})=>{
    //  const context= await browser.newContext({
    //     storageState: 'playwright/.auth/github_loginstate.json',
    // });
    // const page = await context.newPage();

await page.goto('https://github.com/login');

// await page.getByRole('textbox', { name: 'Username or email address' }).fill(process.env.GHUB_USERNAME);
//   await page.getByRole('textbox', { name: 'Password' }).fill(process.env.GHUB_PASSWORD);
//   await page.getByRole('button', { name: 'Sign in', exact: true }).click();
//   await page.waitForURL('https://github.com/', { timeout: 20000 });
//   await page.setViewportSize({ width: 1600, height: 1080 });
//   console.log('User is successfully logged in');

  await page.getByRole('button', { name: 'Open user navigation menu' }).click();
  await expect(page.getByRole('dialog', { name: 'User navigation' })).toBeVisible();
  await page.getByRole('link', { name: 'Profile', exact: true }).click();
  await page.getByText("Projects").click();
  await page.locator("#project_21998625").click();
  await expect(page.getByText("@priyankakesamsetty1504-hue's untitled project")).toBeVisible();
  //await expect(page.getByText("Todo")).toBeVisible();
  await expect(page.getByText("Todo").first()).toBeVisible();
  //const dragme = await page.getByRole('button', {name: 'Drag me Open issue Hello-World #'});
  //page.locator('[data-dnd-drag-id]').first();

const dragSource = page.locator('[data-board-column="Todo"]').getByRole('button', { name: /Drag me/i }).first();
const dropTarget = page.locator('[data-board-column="In Progress"]');
await dragSource.dragTo(dropTarget);

});
