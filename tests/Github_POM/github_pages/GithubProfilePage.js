export class GitHubProfilePage{
constructor(page){
    this.page=page;
    this.projectsLink=page.getByText("Projects");
    this.myproject=page.locator("#project_21998625");
    this.dragsource=page.locator('[data-board-column="Todo"]').getByRole('button', { name: /Drag me/i }).first();
    this.droptarget=page.locator('[data-board-column="In Progress"]');
}

async navigatetoprofile()
{
    await this.projectsLink.click();
    await this.myproject.click();
}
  async openMyProject() {
        await this.myproject.click();
    }

async draganddrop()
{
    await this.dragsource.dragTo(this.droptarget);
}

}