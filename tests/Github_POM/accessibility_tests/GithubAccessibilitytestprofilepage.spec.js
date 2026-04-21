import { test, expect } from '../fixtures';
import AxeBuilder from '@axe-core/playwright';
 
test('Verify Github profile page has no accessibility violations @accessibility', async ({homepage,profilepage,publicprofile,page }) => {
    await homepage.openHomePage();
    //await homepage.clickonopenusernavigationbutton();
    await homepage.navigatetoProfile();
     await page.evaluate(() => {
        const img = document.createElement('img');
        img.src = 'https://github.com/favicon.ico';
        document.body.appendChild(img);
    });
    const results = await new AxeBuilder({ page }).analyze();
    console.log(`Total violations found: ${results.violations.length}`);
    results.violations.forEach((violation, index) => {
        console.log(`Violation ${index + 1}:`);
        console.log(`ID:${violation.id}`);
        console.log(`Severity:${violation.impact}`);
        console.log(`Description:${violation.description}`);
    });
    expect(results.violations).toHaveLength(0);
});