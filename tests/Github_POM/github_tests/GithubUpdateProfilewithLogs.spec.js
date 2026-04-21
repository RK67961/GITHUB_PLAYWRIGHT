import { test, expect } from '../fixtures';
import { getTestLogger } from '../../../Utils/winston_logger';

test.skip('Verify user is able to update the profile @other', async ({ homepage, publicprofile }, testInfo) => {
  const log = getTestLogger(testInfo.title);
  log.info('Test started', { project: testInfo.project.name });
  const profilename = process.env.profile_name;
  if (!profilename) {
    log.warn('profile_name env variable is not set — test may behave unexpectedly');
  } else {
    log.debug('Profile name loaded from env', { profilename });
  }
  log.info('Navigating to GitHub homepage');
  await homepage.openHomePage();
  log.info('Homepage loaded successfully');
  log.info('Clicking user navigation button');
  await homepage.clickonopenusernavigationbutton();
  log.info('User navigation opened');
  log.info('Navigating to profile settings');
  await publicprofile.navigateToSettings();
  log.info('Settings page loaded');
  log.info('Entering user details', { profilename });
  await publicprofile.enteruserdetails(profilename);
  log.info('Profile updated successfully');

  log.info('Test completed', { status: 'passed' });
});