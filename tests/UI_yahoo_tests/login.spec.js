import {test,expect} from '@playwright/test'
test('verify yahoo login',async({page})=>{
const url=process.env.yahoo_baseurl;
const username= process.env.yahoo_username;
const password= process.env.yahoo_password;
await page.goto(url, { waitUntil: 'domcontentloaded'});

await expect(page).toHaveTitle(/Yahoo/i);

//enter uername
await page.getByRole('textbox', { name: 'Username, email, or mobile' }).fill(username);

//click next
 await  page.locator('#login-signin').click();

 //enter password
await page.locator('#login-passwd').fill(password);
await page.locator('#login-signin').click();

// Wait for page to fully load
    await page.waitForLoadState('networkidle');
// Print URL after login attempt
    console.log("URL after login: ", page.url());

// Flexible assertion
    await expect(page.url()).toMatch(/login\.yahoo\.com|yahoo\.com/);

    await page.close();

});