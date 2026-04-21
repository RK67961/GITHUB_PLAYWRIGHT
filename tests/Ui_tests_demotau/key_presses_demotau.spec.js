import { test, expect } from '@playwright/test';

test('validate key press', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/key_presses');
  const input = page.locator('#target');
  await input.click();
//   await page.keyboard.press('Space');
//   await expect(page.locator('#result')).toHaveText('You entered: SPACE');
//   await  input.clear();
//   await page.keyboard.insertText('reshma');
//   await expect(page.locator('#result')).toHaveText('You entered: A');
//await page.keyboard.type('playwright');
await page.keyboard.press('enter')
await page.keyboard.type('playwright');

const message= await page.locator('#result').textContent();
console.log('keypressmessage:',message.trim());
expect(message.trim()).toContain('t');
const screenshotName = `screenshots/Wikipedia-${Date.now()}.png`;
 await page.screenshot({ path: screenshotName }); 
});