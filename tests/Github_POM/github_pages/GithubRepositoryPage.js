import {expect} from '@playwright/test';
export  class RepositoryPage{
constructor(page){
 this.page=page;
 this.pathlink=page.getByRole('link', { name: 'agents/skills/launch' });
 
}

async openRepository() {
    await this.page.goto('https://github.com/microsoft/vscode');
    //await page.waitForLoadState('domcontentloaded');
     }
async validateToolTip()
{
    await this.pathlink.scrollIntoViewIfNeeded();
    await expect(this.pathlink).toBeVisible();
    await this.pathlink.hover();

     await expect(this.pathlink).toHaveAttribute('title','This path skips through empty directories');
}


}