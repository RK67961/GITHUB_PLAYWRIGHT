import {test,expect} from '@playwright/test'
test('Verify admin login', async ({page})=>{
const url= process.env.PRACTISE_BASEURL
await page.goto(url);
//await expect (page.locator('h1')).toContainText('Test Login Page');
await page.locator('#username').fill(process.env.PRACTISE_USERNAME);
await page.locator('#password').fill(process.env.PRACTISE_PASSWORD);
await page.locator('#submit-login').click();
await expect(page).toHaveURL(/secure/);
const flashMessage= page.locator('#flash');
await expect(flashMessage).toBeVisible();
//await expect(flashMessage).toContainText('you logged into a secure area!');

await page.context().storageState({ path:'playwright/.auth/practise_adminloginstate.json' });
});

test('Verify testuser login and save storage state', async ({page})=>{
const url= process.env.PRACTISE_BASEURL
await page.goto(url);
//await expect (page.locator('h1')).toContainText('Test Login Page');
await page.locator('#username').fill(process.env.PRACTISE_TESTUSERNAME);
await page.locator('#password').fill(process.env.PRACTISE_TESTPASSWORD);
await page.locator('#submit-login').click();
await page.context().storageState({ path:'playwright/.auth/practise_testuserloginstate.json' });
});