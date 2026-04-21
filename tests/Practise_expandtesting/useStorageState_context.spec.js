import {test,expect}  from '@playwright/test'

test.only('Access secure page using stored login state and browser fixture',async({page})=>{

    // const context= await browser.newContext({
    //     storageState: 'playwright/.auth/practise_adminloginstate.json',
    // });
    //const page = await context.newPage();
    await page.goto('https://practice.expandtesting.com/secure');
    await expect(page.url()).toContain('secure');
    await expect(page.locator('text=Welcome to the Secure Area.')).toBeVisible();
    await page.close();
});

test('Access secure page using stored TEST login state and browser fixture',async({page})=>{

    // const context= await browser.newContext({
    //     storageState: 'playwright/.auth/practise_adminloginstate.json',
    // });
    //const page = await context.newPage();
    test.use({
  storageState: 'playwright/.auth/practise_testuserloginstate.json'
});
    await page.goto('https://practice.expandtesting.com/secure');
    await expect(page.url()).toContain('secure');
    await expect(page.locator('text=Welcome to the Secure Area.')).toBeVisible();
    await page.close();
});