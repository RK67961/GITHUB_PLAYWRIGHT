import{test,expect} from '@playwright/test'
import {GithubHomePage} from '../github_pages/GithubHomePage';
import { GitHubProfilePage } from '../github_pages/GithubProfilePage';
import { GitHubProjectsPage } from '../github_pages/GithubProjectPage';

test('Verify drag and drop in github @other',async({page})=>{ 

    
    const homepage= new GithubHomePage(page)
    await homepage.openHomePage();
    await homepage.navigatetoProfile();

    const profilepage= new GitHubProfilePage(page)
    await profilepage.projectsLink.click();
    await profilepage.myproject.click();
    
    const projectpage= new GitHubProjectsPage(page)
    await projectpage.dragIssueToInProgress();

    await expect(projectpage.inProgressColumn).toContainText('Drag me');

});