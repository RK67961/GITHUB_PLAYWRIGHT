// import{test,expect} from '@playwright/test';
// import { RepositoryPage } from '../github_pages/GithubRepositoryPage';
import { test, expect } from '../fixtures';
test.fixme('Verify Tool tip is working in Github @other',async({repositorypage})=>{
  //const repositoryPage = new RepositoryPage(page);
  await repositoryPage.openRepository();
  await repositoryPage.validateToolTip();
});