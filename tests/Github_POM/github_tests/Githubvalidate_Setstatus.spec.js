// import {test, expect} from '@playwright/test'
// import { GithubHomePage } from '../github_pages/GithubHomePage';
//const { test, expect } = require('../fixtures');
import { test, expect } from '../fixtures.js';
test('verify user can set the status @other',async({homepage})=>{
    //const homepage= new GithubHomePage(page);
   await homepage.openHomePage();
   await homepage.clickSetStatusandEnterDetails('Busy','In 1 hour');
   await homepage.validateStatusUpdated('Busy');
});