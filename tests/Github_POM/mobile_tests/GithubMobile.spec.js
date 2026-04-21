
import{test,expect }from'../fixtures';

test('Verify Github homepage on Mobile', async ({ homepage,page }) => {
  await homepage.openHomePage();
  await page.screenshot({path: './screenshots/github-mobile-home.png',fullPage: true});
  //await expect(page.getByRole('button',{name:'Toggle navigation'})).toBeVisible();
   // await expect(page.locator('[aria-label="Toggle navigation"]')).toBeVisible();
});


test('Verify Github Profile Update on Mobile',async ({homepage,publicprofile,page }) => {

  await homepage.openHomePage();
  await homepage.clickonopenusernavigationbutton();
  await page.screenshot({path: './screenshots/mobile-nav-open.png'});
  await publicprofile.navigateToSettings();
  await page.screenshot({path: './screenshots/mobile-settings.png',fullPage: true});
  
});