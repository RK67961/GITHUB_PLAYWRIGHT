import { test, expect } from '@playwright/test';
import { LoginPage } from '../yahoo_pages/loginpage';


test('Yahoo Login using POM with login() method', async ({ page }) => {
    const url = "https://login.yahoo.com/";
    const userId = process.env.yahoo_username;
    const password = process.env.yahoo_password;

    const loginPage = new LoginPage(page);

    await loginPage.navigate(url);
    await expect(page).toHaveTitle(/Yahoo/i);

    // Single method for login
    await loginPage.login(userId,password);

    const currentUrl = await loginPage.getCurrentUrl();
    console.log("URL after login:", currentUrl);

    await expect(currentUrl).toMatch(/login\.yahoo\.com|yahoo\.com/);

    await page.close();
});