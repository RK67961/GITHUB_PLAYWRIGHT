import { GithubHomePage } from "./GithubHomePage"
import { expect } from "allure-playwright";
export class PublicProfile{
    constructor(page){
    this.page=page;
    this.personalprofiletext=page.getByText('*Your personal account*');
    this.notificationsLink = page.getByRole('link',{name:'Notifications',exact:true});
    this.publicprofile = page.getByRole('heading',{name:'Public profile',exact:true});
    this.securityCampaignToggle = page.locator('button[aria-labelledby*="_R_5hb"]');
    this.clickonSettingslink = page.getByText('Settings',{exact:true});
    //this.UserName=page.getByRole('textbox',{name:'user[profile_name]'});
    this.UserName = page.locator('input[name="user[profile_name]"]');
    //this.selectEmail=page.locator('input[name="user[profile_name]"]');
    this.selectEmail = page.locator('select[name="user[profile_email]"]');
    this.userbio=page.getByRole('textbox',{name:'Bio',exact:true});
    this.pronouns=page.getByRole('combobox',{name:'Pronouns',exact:true});
    this.company= page.getByRole('textbox',{name:'Company',exact:true});
    this.location= page.getByRole('textbox',{name:'Location',exact:true});
    this.displaylocaltime=page.getByRole('checkbox',{name:'Display current local time',exact:true});
    this.updateProfile=page.getByRole('button',{name:'Update profile',exact:true})
    this.successAlert=page.locator('div[role="alert"]');
}
async navigateToSettings(){
  //await this.OpenUserNavigationMenubutton.click();
  await this.clickonSettingslink.click();
  await expect(this.publicprofile).toBeVisible();
}
async clickonnotifications(){
  await this.notificationsLink.click();
  //await this.securityCampaignToggle.click();
  //await expect(this.securityCampaignToggle).toHaveAttribute('aria-pressed', 'false');
     const ariaPressed = await this.securityCampaignToggle.getAttribute('aria-pressed');
    if(ariaPressed === 'true'){
        await this.securityCampaignToggle.click();
        await expect(this.securityCampaignToggle).toHaveAttribute('aria-pressed', 'false');
    } else {
        console.log('Toggle is already OFF');
    }
  }
  async enteruserdetails(profilename){
    await this.UserName.click();
    await this.UserName.fill(profilename);
    //this.selectEmail.click();
    await this.selectEmail.selectOption({index:1});
    await this.userbio.fill("i am qa engineer");
    await this.pronouns.selectOption({index:2});
    await this.company.fill('zensar');
    await this.location.fill('Bangalore');
   // await this.updateProfile.click();
       await Promise.all([
        this.page.waitForLoadState('domcontentloaded'),
        this.updateProfile.click()
         ]);
    await this.page.waitForSelector('div[role="alert"]',{ state:'visible'});
    await expect(this.successAlert).toContainText('Profile updated successfully');


  }
}

