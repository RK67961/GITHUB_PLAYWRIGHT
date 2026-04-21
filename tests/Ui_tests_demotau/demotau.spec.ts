import {test,expect} from '@playwright/test'

test('@demotau verify that user is able to open demotau and perform actions',async({page})=>{
await page.goto(`https://dd-demo-tau.vercel.app/web_elements.html`);
const textinput =page.getByRole("link",{name:'1. Text Input'});
await textinput.click();
const enterinputtxt=page.locator('//input[@id="textInputField"]');
await enterinputtxt.fill("priyanka_test")
await page.getByRole("link", {name: '3. Email Input'}).click();
await page.getByPlaceholder('name@example.com').fill("test@gmail.com");
//await page.getByRole("link", {name: '7. Dropdown'}).click();
await page.locator("//a[contains(text(),'7. Dropdown')]").click();

await page.locator("//select[@id='dropdownField']").selectOption('BMW');
expect(page.locator('#dropdownField')).toHaveValue('BMW');
//radiobutton
await page.locator("//a[contains(text(),'5. Radio Buttons')]").click();
await page.getByLabel('Male', {exact: true}).check();

// radiobutton with chaining


// await page.locator("//a[contains(text(),'5. Radio Buttons')]").getByLabel('Male', {exact: true}).check();
//await page.locator("//div[contains(text(),'Selected Gender: Male')]").check();
//await page.waitForTimeout(3000);

//check box
await page.locator("//a[contains(text(),'6. Checkboxes')]").click();
await page.getByLabel('Agree').check();

//Multiselect 
// await page.locator("//a[contains(text(),'8. Multi-Select')]").click();
// await page.locator('#multiSelectField').selectOption(['Apple', 'Banana']);


//Fileupload
await page.locator("//a[contains(text(),'9. File Upload')]").click();
await page.getByLabel('Choose file').setInputFiles('tests/test-data/tc002.xlsx'); 
const fileName = await page.locator('#fileUploadField')
  .evaluate(el => (el as HTMLInputElement).files![0].name);
  console.log(fileName);
  //setInputFiles('tests/test-data/tc002.xlsx');
// await page.close();
await page.locator("//a[contains(text(),'11. Color & Range')]").click();
const slider = page.locator('#rangeField');
await slider.click();
await slider.press('ArrowRight'); 

//tooTip
// await page.getByRole('link', {name: '18. Tooltips'}).click();
// await page.getByRole('button', {name: 'Hover me'}).hover();
//   const tooltiplocator = page.locator('#tooltipMsg');
//   await expect(tooltiplocator).toBeVisible();
//    const tooltipText = await tooltiplocator.textContent();
//    await expect(tooltipText).toBe("Tooltip displayed");
//    console.log(tooltipText);


//locatorchaining

// await page.locator("//a[contains(text(),'18. Tooltips')]").getByRole('button', { name: 'Hover me' }).hover()


//Draganddrop
//  await page.getByRole('link',{name:'24. Drag & Drop'}).click();
//  //const dragbutton= await page.getByRole('button',{name:'Drag Me'});
//  const dragbutton= await page.locator("//button[text()='Drag Me']");
//  //page.waitForTimeout(3000);
//  //const dropbox = await page.getByRole('region',{name:'Drop zone'});
//  const dropbox = page.getByText('Drop Here');
//  dragbutton.dragTo(dropbox);

//Multitab

const multitab = await page.getByRole('link',{name:'29. Multi-tab Navigation'});
//multitab.scrollIntoViewIfNeeded();
multitab.click();
const newtab_button= await page.getByRole('button', { name: 'Open New Tab' });
newtab_button.click();

});

