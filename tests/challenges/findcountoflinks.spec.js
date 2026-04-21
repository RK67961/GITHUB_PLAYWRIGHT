import {test,expect} from '@playwright/test'
import { GitHubProfilePage } from '../Github_POM/github_pages/GithubProfilePage';
test.skip('Find the count of all links in wikipedia.org',async({page})=>{
const url='https://www.wikipedia.org/';
await page.goto(url);
//const allLinks = page.getByRole('link');
const allLinks = page.locator('a[href]');
const count = await allLinks.count();
//console.log(await allLinks.allInnerTexts());
//console.log(await allLinks.allTextContents());
for(let i=1;i<=count-1;i++)
{
    const htmllink = await allLinks.nth(i).getAttribute('href');
    const innertxt= await allLinks.nth(i).innerText();
    console.log(htmllink);
    console.log(innertxt);
}
//console.log(await allLinks.innerHTML());
console.log('Total links:', count);
})

test('Find the count of all links in wikipedia.org-screenshot',async({page})=>{
const url='https://www.wikipedia.org/';
await page.goto(url);
//const allLinks = page.getByRole('link');
const allLinks = page.locator('a[href]');
const count = await allLinks.count();
//console.log(await allLinks.allInnerTexts());
//console.log(await allLinks.allTextContents());
for(let i=1;i<=count-1;i++)
{
    const htmllink = await allLinks.nth(i).getAttribute(href);
    const innertxt= await allLinks.nth(i).innerText();
    console.log(htmllink);
    console.log(innertxt);
const screenshotName = `screenshots/Wikipedia-${Date.now()}.png`;
 await page.screenshot({ path: screenshotName });    
}
//console.log(await allLinks.innerHTML());
console.log('Total links:', count);
})