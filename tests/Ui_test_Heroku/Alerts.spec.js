import {test, expect} from '@playwright/test';
test('@heroku Alert example', async({ page }) => {
  const url ="https://the-internet.herokuapp.com/javascript_alerts?";
  await page.goto(url);
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
    });
    });