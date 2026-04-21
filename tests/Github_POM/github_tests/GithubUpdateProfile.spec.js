// import {test,expect} from '@playwright/test'
// import { GithubHomePage } from '../github_pages/GithubHomePage'
// import { PublicProfile } from '../github_pages/GithubPublicProfilePage';
// const { test, expect } = require('../fixtures');
import { test, expect } from '../fixtures';
test('Verify user is able to update the profile @other', async ({homepage,publicprofile})=>{
const profilename=process.env.profile_name;
// const homepage = new GithubHomePage(page);
await homepage.openHomePage();
await homepage.clickonopenusernavigationbutton();

// const publicprofile = new PublicProfile(page);
await publicprofile.navigateToSettings();
await publicprofile.enteruserdetails(profilename);

});
