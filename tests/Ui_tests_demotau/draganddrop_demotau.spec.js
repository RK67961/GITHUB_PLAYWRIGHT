import {test,expect} from '@playwright/test'
test('drag and drop', async ({page})=>{
const url='https://dd-demo-tau.vercel.app/web_elements.html#24-drag-drop';
await page.goto(url);
  const dragbutton = page.getByRole('button', { name: 'Drag Me' });
  const dropbox = page.getByText('Drop Here');
  await expect(dragbutton).toBeVisible();
  await expect(dropbox).toBeVisible();
  await dragbutton.dragTo(dropbox);
  await expect(dropbox).toContainText('Drag Me');
  await expect(page.getByRole('generic',{name:'Dropped: Drag Me'})).toBeVisible();
});