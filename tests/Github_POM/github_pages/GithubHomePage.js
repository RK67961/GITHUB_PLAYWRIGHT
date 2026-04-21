import{expect} from '@playwright/test'
export  class GithubHomePage{
  constructor(page){
    this.page=page;
    //this.OpenUserNavigationMenubutton= page.getByRole('button',{ name: 'Open user navigation menu' });
    this.OpenUserNavigationMenubutton= page.locator('button[data-login]');
    this.UserNavigationMenu= page.getByRole('dialog',{ name: 'User navigation'});
    this.profile=page.getByRole('link', {name:'Profile', exact: true });
    this.CreateNewButton = page.getByRole('button',{name:'Create new...'});
    this.CreateNewRepoButton=page.getByRole('menuitem',{name:'New repository'});
    this.setStatusLink= page.getByText('Set status');
    this.editStatusHeading =page.getByRole('heading',{name: 'Edit status'});
    this.enterStatusText=page.getByTestId('user-status-message-input');
    this.ExpirationDropDown = page.locator('select[name="expires_at"]');
    this.setStatusButton = page.locator('button[type="submit"]',{hasText:'Set status'});
    this.clickonSettingslink = page.getByText('Settings', { exact: true });
    //this.updatedStatusText =page.getByText(statusText);
    this.personalprofiletext=page.getByText('*Your personal account*');
    this.notificationsLink = page.getByRole('link', { name: 'Notifications', exact: true });
    this.publicprofile = page.getByRole('heading', { name: 'Public profile', exact: true });
    this.securityCampaignToggle = page.locator('button[aria-labelledby*="_R_5hb"]'
);
  }
    async openHomePage() {
    await this.page.goto('https://github.com/');
     }
  async navigatetoProfile(){
    await this.OpenUserNavigationMenubutton.click();
    await this.profile.click();
  }
  async createNewRepo()
  {
    await this.CreateNewButton.click();
    await this.CreateNewRepoButton.click();
  }
  async clickSetStatusandEnterDetails(statusText,expirationOption)
  {
    await this.OpenUserNavigationMenubutton.click();
    await this.setStatusLink.click();
    await expect(this.editStatusHeading).toBeVisible();
    await this.enterStatusText.click();
    await this.enterStatusText.fill(statusText);
    await this.ExpirationDropDown.selectOption({ label:expirationOption });
    await this.setStatusButton.click();
  }
  async validateStatusUpdated(statusText) {
    await expect(this.page.getByText(statusText)).toBeVisible();
    await this.page.screenshot({ path:'fullpage.png',fullPage:true});

  }
  async clickonopenusernavigationbutton()
  {
    this.OpenUserNavigationMenubutton.click();
  }
}
