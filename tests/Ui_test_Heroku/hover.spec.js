import {test,expect} from '@playwright/test';
test('hover on first image', async({page})=>{
const url="https://the-internet.herokuapp.com/hovers";
await page.goto(url);
  const firstImage = page.locator("(//div[@class='figure'])[1]");
  await firstImage.hover();
  await expect(firstImage.locator("(//div[@class='figcaption'])[1]")).toBeVisible();
  await expect(firstImage.getByText('name: user1')).toHaveText('name: user1');
  await expect(firstImage.getByText('View profile')).toHaveText('View profile'); 
});
test('hover on second image', async({page})=>{
const url="https://the-internet.herokuapp.com/hovers";
await page.goto(url);
  const firstImage = page.locator("(//div[@class='figure'])[2]");
  await firstImage.hover();
  await expect(firstImage.locator("(//div[@class='figcaption'])[2]")).toBeVisible();
  await expect(firstImage.getByText('name: user2')).toHaveText('name: user2');
  await expect(firstImage.getByText('View profile')).toHaveText('View profile'); 
});
test('hover on third image', async({page})=>{
const url="https://the-internet.herokuapp.com/hovers";
await page.goto(url);
  const firstImage = page.locator("(//div[@class='figure'])[3]");
  await firstImage.hover();
  await expect(firstImage.locator("(//div[@class='figcaption'])[3]")).toBeVisible();
  await expect(firstImage.getByText('name: user3')).toHaveText('name: user3');
  await expect(firstImage.getByText('View profile')).toHaveText('View profile'); 
});

test('hover on first image using getbyrole', async({page})=>{
const url="https://the-internet.herokuapp.com/hovers";
await page.goto(url);
  const firstImage = await page.getByRole('img', { name: 'User Avatar' }).first();
  await firstImage.hover();
  //await expect(firstImage.locator("(//div[@class='figcaption'])[3]")).toBeVisible();
  //await expect(firstImage.locator("(//div[@class='figcaption'])[3]")).toBeVisible();
  await expect(page.getByText('name: user1')).toHaveText('name: user1');
  await expect(page.getByText('View profile').first()).toHaveText('View profile');
});