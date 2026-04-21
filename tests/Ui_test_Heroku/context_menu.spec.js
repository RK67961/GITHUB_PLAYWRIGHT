import {test,expect} from   '@playwright/test'
test('context menu', async({page})=>
{
const url ="https://the-internet.herokuapp.com/context_menu";
await page.goto(url);
page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.getByRole('generic',{button:'right'});
});