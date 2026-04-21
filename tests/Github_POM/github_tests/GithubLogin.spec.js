import {test,expect} from '@playwright/test'
import { GithubLogin} from '../github_pages/GithubLogin'
 test('Github Login using POM', async ({page})=>{
    const url="https://github.com/login";
    const username=process.env.GHUB_USERNAME;
    const password=process.env.GHUB_PASSWORD;

    const githubLogin= new GithubLogin(page);
    await  githubLogin.navigate(url);
    await githubLogin.login(username,password);

    
    const currentUrl = await githubLogin.getCurrentUrl();
    console.log("URL after login:", currentUrl);


    await expect(currentUrl).toMatch(/github\.com/);
    await page.context().storageState({ path:'playwright/.auth/github_adminstoragestatePOM.json' });

 });