import { test as base, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

import {GithubHomePage} from './github_pages/GithubHomePage.js';
import {PublicProfile} from './github_pages/GithubPublicProfilePage';
import {GitHubProfilePage} from './github_pages/GithubProfilePage';
import {GitHubProjectsPage} from './github_pages/GithubProjectPage';
import {NewRepository} from './github_pages/GithubNewRepositoryPage';
export const test = base.extend({
   homepage:async({page}, use) => {
    const homepage = new GithubHomePage(page);
    await use(homepage);                         
    },
  publicprofile:async({page},use) => {
    const publicprofile = new PublicProfile(page); 
    await use(publicprofile);                        
  },
  repositorypage: async({page},use) => {
    const repositorypage = new RepositoryPage(page); 
    await use(repositorypage);                        
  },
  projectspage: async({page},use) => {
    const projectspage = new GitHubProjectsPage(page); 
    await use(projectspage);                        
  },
  profilepage: async({page},use) => {       
    const profilepage = new GitHubProfilePage(page); 
    await use(profilepage);                        
  },
   newrepo: async ({ page }, use) => {
    const newrepo = new NewRepository(page);
    await use(newrepo);
  },
   axe: async ({ page }, use) => {

    const runAxe = async () => {
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();

      console.log(`Violations: ${results.violations.length}`);

      return results;
    };

    await use(runAxe);
  }
});
//exports.expect = base.expect;
export { expect };
