import {test,expect} from '@playwright/test'
import  {GithubHomePage}  from '../github_pages/GithubHomePage';
import { PublicProfile } from '../github_pages/GithubPublicProfilePage';
test('Verify user is able to disable security campaign emails @other ',async({page})=>{
 
    const homepage= new GithubHomePage(page);
    await  homepage.openHomePage();
    await homepage.clickonopenusernavigationbutton();
    const publicprofile = new PublicProfile(page);
    await publicprofile.navigateToSettings();
    await publicprofile.clickonnotifications();
    await expect(page).toHaveURL(/settings/);



});