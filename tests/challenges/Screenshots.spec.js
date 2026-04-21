import{test,expect} from '@playwright/test';
test('Take Screenshot_Same Name', async ({ page }) => {
 
  await page.goto('https://www.wikipedia.org');
  await expect(page).toHaveTitle(/Wikipedia/);
 
//   same screenshot name for each test run in screenshots folder
  const screenshotName = 'screenshots/Wikipedia.png';
  await page.screenshot({ path: screenshotName });
});
 
 
test('Take Screenshot_Unique Name', async ({ page }) => {
 
  await page.goto('https://www.wikipedia.org');
  await expect(page).toHaveTitle(/Wikipedia/);
 
  //   unique screenshot name for each test run in screenshots folder
  const screenshotName = `screenshots/Wikipedia-${Date.now()}.png`;
 
  await page.screenshot({ path: screenshotName });
});
 
 
test('Take Screenshot_TestTitle', async ({ page }, testInfo) => {
 
  await page.goto('https://www.wikipedia.org');
  await expect(page).toHaveTitle(/Wikipedia/);
 
  //   mention screenshot name as <testname>_ in screenshots folder for demo.
    const screenshotName = `screenshots/${testInfo.title}-${Date.now()}.png`;
 
  await page.screenshot({ path: screenshotName });
});
 
 
test('Take Screenshot_BestPractice', async ({ page }, testInfo) => {
 
  await page.goto('https://www.wikipedia.org');
  await expect(page).toHaveTitle(/Wikipedia/);
 
    
    await page.screenshot({ path: testInfo.outputPath('Wikipedia_success.png') });
 

});