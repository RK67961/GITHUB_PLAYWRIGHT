import { expect } from '@playwright/test';
export class NewRepository{
    constructor(page){
        this.page=page;
        this.CreateNewRepositoryHeading=page.getByRole('heading', { name: /Create a new repository/i })
        this.RepositoryNameInput =page.locator('#repository-name-input');
        this.RepositoryDescriptionInput=page.getByRole('textbox',{name:'Description'});
        this.CreateRepositoryButton=page.getByRole('button',{name:'Create repository'});

    }
async validateCreateNewRepositoryPage() {
    await expect(this.CreateNewRepositoryHeading).toBeVisible();
}
async fillthedetails(RepositoryNameInput,RepositoryDescriptionInput){
await this.RepositoryNameInput.waitFor({ state: 'visible' });
  await this.RepositoryNameInput.click();
  await this.RepositoryNameInput.fill(RepositoryNameInput);
  await this.RepositoryNameInput.press('Tab');
 // await expect(this.RepositoryNameInput).toHaveValue(new RegExp(`${RepositoryNameInput}$`));
  await this.RepositoryDescriptionInput.click();
  await this.RepositoryDescriptionInput.fill(RepositoryDescriptionInput);
//  await expect(this.RepositoryDescriptionInput).toHaveValue(new RegExp(`${RepositoryDescriptionInput}$`));
  //await this.page.pause();
//   await this.CreateRepositoryButton.scrollIntoViewIfNeeded();
//   await expect(this.CreateRepositoryButton).toBeEnabled();
  await this.page.waitForTimeout(2000); 
  await this.CreateRepositoryButton.click();
 //await this.page.waitForLoadState('networkidle');

}
async validateRepositoryCreated(RepositoryNameInput){
    //await expect(this.page).toHaveURL(new RegExp(`${RepositoryNameInput}$`));
    //await expect(this.page.getByRole('heading',{ name:RepositoryNameInput })).toBeVisible();
// const formattedName = repositoryNameInput.replace(/\s+/g, '-').toLowerCase();
// await expect(this.page).toHaveURL(new RegExp(`${formattedName}$`));
    const formattedName=RepositoryNameInput.replace(/\s+/g,'-').toLowerCase(); // uppercase R
    await expect(this.page).toHaveURL(new RegExp(`${formattedName}$`,'i'));
}

//   async deleteRepository(RepositoryNameInput) {
//     // Go to repo settings
//     await this.page.goto(`https://github.com/priyankakesamsetty1504-hue/${RepositoryNameInput}/settings`);
    
//     // Scroll to danger zone and click Delete
//     await this.page.getByRole('button', { name: 'Delete this repository' }).click();
//     await this.page.locator('#repo-delete-proceed-button').click();
//     await this.page.getByText('I have read and understand these effects').click();
    
//     // Type repo name in confirmation dialog
//     await this.page.getByRole('textbox', { name: 'Type the repository name to confirm' }).fill(RepositoryNameInput);
    
//     // Click final confirm delete button
//     await this.page.getByRole('button', { name: 'Delete this repository', exact: true }).click();
    
//     await this.page.waitForLoadState('networkidle');
//     console.log(`Repository ${repoName} deleted successfully`);
//}


}